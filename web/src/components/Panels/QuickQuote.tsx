import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

export function QuickQuoteActions() {
  function handleClick() {
    console.log("Clicked on Quick Quote action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <ArrowsPointingOutIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function QuickQuote() {
  return <div>Quick Quote</div>;
}
