import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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
  return <div>Popular Destinations</div>;
}
