import { Bars4Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export function Header() {
  return (
    <header className="bg-custom-purple p-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Bars4Icon className="w-6 h-6 text-white ml-3" />
        <img src={logo} alt="Wet Bat Travel" className="h-10" />
      </div>

      <div className="flex items-center gap-10">
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
          </div>
          <input
            type="search"
            id="default-search"
            className="bg-gray-200 block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg focus:border-opacity-0"
          />
        </div>

        <div className="flex items-center text-white gap-10">
          <Icon icon="notifications" />
          <Icon icon="messages" />
          <Icon icon="admin" />
        </div>

        <Avatar picture={avatar} />
      </div>
    </header>
  );
}
