import {
  ArrowsPointingOutIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export function PendingQuotesActions() {
  function handleClick() {
    console.log("Clicked on Pending Quotes action button");
  }

  return (
    <div className="flex gap-5">
      <button type="button" onClick={handleClick}>
        <ArrowsPointingOutIcon className="w-6 h-6 text-gray-400" />
      </button>
      <button type="button" onClick={handleClick}>
        <ArrowPathIcon className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  );
}

export function PendingQuotes() {
  return <div>Pending Quotes</div>;
}
