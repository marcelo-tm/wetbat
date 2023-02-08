import { useMemo } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import monthsLabels from "../../data/months.json";

type ItemProps = {
  data: number[];
  borderColor: string;
};

type RevenueProps = {
  list: ItemProps[];
};

export function RevenueActions() {
  function handleClick() {
    console.log("Clicked on Revenue action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function Revenue({ list }: RevenueProps) {
  const data = useMemo(() => {
    return {
      labels: monthsLabels.contracted,
      datasets: list.map((item) => {
        return {
          data: item.data,
          fill: false,
          borderColor: item.borderColor,
          tension: 0.1,
        };
      }),
    };
  }, [list]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4">
      <Chart type="line" data={data} options={options} />
    </div>
  );
}
