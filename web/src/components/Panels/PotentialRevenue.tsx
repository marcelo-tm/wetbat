import { useMemo } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { potentialRevenue } from "../../data/charts.json";

export function PotentialRevenueActions() {
  function handleClick() {
    console.log("Clicked on Potential Revenue action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function PotentialRevenue() {
  const data = useMemo(() => {
    return potentialRevenue.map((item) => {
      return {
        labels: [],
        datasets: [
          {
            data: item.data,
            backgroundColor: item.colors,
            hoverOffset: 4,
          },
        ],
      };
    });
  }, [potentialRevenue]);

  return (
    <div className="flex justify-center">
      <div className="flex">
        {data.map((item, i) => (
          <div key={i} className="w-28 h-28">
            <Chart type="pie" data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
