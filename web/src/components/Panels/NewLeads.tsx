import {
  ArrowsPointingOutIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type NewLead = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  date: string;
};

type NewLeadsProps = {
  list: NewLead[];
  onClick: (id: string) => void;
};

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

export function NewLeads({ list, onClick }: NewLeadsProps) {
  return (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          className="flex justify-between px-6 py-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => onClick(item.id)}
        >
          <div className="flex gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-600">{item.name}</p>
              <p className="text-xs text-gray-400">{item.message}</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-gray-400">{item.date}</p>
        </li>
      ))}
    </ul>
  );
}
