import {
  ArrowsPointingOutIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export function NewLeadsActions() {
  function handleClick() {
    console.log("Clicked on New Leads action button");
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

export function NewLeads() {
  return <div>New Leads</div>;
}
