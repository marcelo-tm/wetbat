import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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
  return <div>Revenue</div>;
}
