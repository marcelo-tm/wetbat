import { useMemo } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

type ItemProps = {
  data: number[];
  colors: string[];
};

type CloseRatioProps = {
  ratio: ItemProps;
};

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

export function CloseRatio({ ratio }: CloseRatioProps) {
  const chartData = useMemo(() => {
    return {
      labels: [],
      datasets: [
        {
          data: ratio.data,
          backgroundColor: ratio.colors,
          hoverOffset: 4,
        },
      ],
    };
  }, [ratio]);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-28 h-28">
        <Chart type="doughnut" data={chartData} />
      </div>
    </div>
  );
}
