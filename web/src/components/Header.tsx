import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export function Header() {
  return (
    <header className="bg-custom-purple p-4 flex justify-between items-center">
      <img src={logo} alt="Wet Bat Travel" className="h-10" />

      <div className="flex items-center gap-10">
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
