import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

import { MapChart } from "./MapChart";

const markers: [number, number][] = [
  [-62.291981, -38.613839],
  [-44.747357, -19.55295],
  [-65.182545, 8.277598],
  [-83.920497, 10.185606],
  [-95.896147, 18.594695],
  [-123.066369, 38.986794],
  [-149.79563, 62.26005],
  [-8.159518, 39.617361],
  [-2.611959, 52.730628],
  [0.855265, 48.21135],
  [10.820729, 44.248913],
  [21.244844, 53.674068],
  [49.666846, 25.215138],
  [44.099468, 7.539214],
  [81.255781, 26.776832],
  [101.470624, 14.638682],
  [137.857341, 35.632144],
  [151.216716, -31.173491],
];

export function PopularDestinationsActions() {
  function handleClick() {
    console.log("Clicked on Popular Destinations action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function PopularDestinations() {
  const [content, setContent] = useState("");

  const data = {
    labels: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    datasets: [
      {
        axis: "y",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex h-[calc(100%-54px)]">
      <div className="border-r-2 border-gray-200 p-4 h-full">
        <Chart type="bar" data={data} options={options} />
      </div>
      <div className="p-4 w-full">
        <MapChart markers={markers} setTooltipContent={setContent} />
        <Tooltip>{content}</Tooltip>
      </div>
    </div>
  );
}
