import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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
  return <div>Potential Revenue</div>;
}
