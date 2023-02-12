import {
  ArrowsPointingOutIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type PendingQuote = {
  id: string;
  name: string;
  destination: string;
  price: string;
};

type PendingQuotesProps = {
  list: PendingQuote[];
  onClick: (id: string) => void;
};

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

export function PendingQuotes({ list, onClick }: PendingQuotesProps) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="uppercase text-sm text-left text-gray-600">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Destination</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr
              key={item.id}
              className="text-xs text-gray-500 hover:bg-gray-100 cursor-pointer"
              onClick={() => onClick(item.id)}
            >
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.destination}</td>
              <td className="px-4 py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
