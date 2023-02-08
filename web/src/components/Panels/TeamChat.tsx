import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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

export function TeamChat() {
  return <div>Team Chat</div>;
}
