import { useMemo } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { closeRatio } from "../../data/charts.json";

export function CloseRatioActions() {
  function handleClick() {
    console.log("Clicked on Close Ratio action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function CloseRatio() {
  const data = useMemo(() => {
    return {
      labels: [],
      datasets: [
        {
          data: [closeRatio.notClosed, closeRatio.closed],
          backgroundColor: ["rgb(230, 123, 121)", "rgb(90, 172, 168)"],
          hoverOffset: 4,
        },
      ],
    };
  }, [closeRatio]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-36 h-36">
        <Chart type="doughnut" data={data} />
      </div>
    </div>
  );
}
