import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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
  return <div>Close Ratio</div>;
}
