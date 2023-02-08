import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

type TeamStatus = {
  key: string;
  label: string;
  color: string;
};

type TeamChatUserProps = {
  id: string;
  avatar: string;
  name: string;
  role: string;
  status: string;
};

type TeamChatProps = {
  list: TeamChatUserProps[];
};

const memberStatus: TeamStatus[] = [
  {
    key: "available",
    label: "available",
    color: "bg-green-600",
  },
  {
    key: "not_available",
    label: "not available",
    color: "bg-yellow-400",
  },
  {
    key: "busy",
    label: "busy",
    color: "bg-red-600",
  },
  {
    key: "offline",
    label: "offline",
    color: "bg-gray-300",
  },
];

export function TeamChatActions() {
  function handleClick() {
    console.log("Clicked on Team Chat action button");
  }

  return (
    <button type="button" onClick={handleClick}>
      <EllipsisVerticalIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
}

export function TeamChat({ list }: TeamChatProps) {
  function handleChatClick(id: string) {
    console.log(`Clicked on the chat item for id ${id}`);
  }

  return (
    <ul>
      {list.map((item) => {
        let status = memberStatus.find((status) => status.key === item.status);

        if (!status) status = memberStatus[3];

        return (
          <li
            key={item.id}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <div className="flex gap-3">
              <div className="relative">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg"
                />
                <span
                  className={`absolute w-4 h-4 border-2 border-white rounded-full -top-1 -right-1  ${status.color}`}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-600">{item.name}</p>
                <p className="text-xs text-gray-400">{item.role}</p>
                <p className="text-xs italic text-gray-500">{status.label}</p>
              </div>
            </div>
            <div>
              <button type="button" onClick={() => handleChatClick(item.id)}>
                <ChatBubbleLeftEllipsisIcon className="text-custom-dark-green w-8 h-8" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
