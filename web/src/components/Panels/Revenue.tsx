import { useMemo } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { revenue } from "../../data/charts.json";

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

export function Revenue() {
  const data = useMemo(() => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: revenue.map((item) => {
        return {
          data: item.data,
          fill: false,
          borderColor: item.borderColor,
          tension: 0.1,
        };
      }),
    };
  }, [revenue]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="">
      <Chart type="line" data={data} options={options} />
    </div>
  );
}
