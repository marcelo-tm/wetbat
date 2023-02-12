import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import mapData from "../../data/map_data.json";

type MapChartProps = {
  markers: [number, number][];
  setTooltipContent: (content: string) => void;
};

export function MapChart({ markers, setTooltipContent }: MapChartProps) {
  return (
    <ComposableMap>
      <Geographies geography={mapData} fill="#d1f0f0">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map((coordinates, i) => (
        <Marker
          key={i}
          coordinates={coordinates}
          onMouseEnter={() => setTooltipContent(JSON.stringify(coordinates))}
          onMouseLeave={() => setTooltipContent("")}
        >
          <g
            fill="#FF5533"
            stroke="none"
            strokeWidth="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -36)"
          >
            <path
              d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
              id="Shape"
              fill="#FF6E6E"
            ></path>
            <circle
              id="Oval"
              fill="#ffffff"
              fillRule="nonzero"
              cx="14"
              cy="14"
              r="7"
            ></circle>
          </g>
        </Marker>
      ))}
    </ComposableMap>
  );
}
