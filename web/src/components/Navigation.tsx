import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Icon } from "./Icon";

type Menu = {
  icon?: string;
  label: string;
  to: string;
};

type NavigationProps = {
  menus: Array<Array<Menu>>;
};

export function Navigation({ menus }: NavigationProps) {
  return (
    <aside>
      <nav className="bg-gray-200">
        <ul>
          {menus.length > 0
            ? menus.map((section, i) => (
                <Fragment key={i}>
                  {section.length > 0
                    ? section.map((menu, i) => (
                        <li className="hover:bg-gray-300" key={i}>
                          <Link
                            to={menu.to}
                            className="flex gap-2 text-custom-purple px-7 py-5"
                          >
                            {menu.icon ? <Icon icon={menu.icon} /> : null}{" "}
                            {menu.label}
                          </Link>
                        </li>
                      ))
                    : null}
                  <hr className="h-[0.15rem] w-full bg-gray-300" />
                </Fragment>
              ))
            : null}
          <li>
            <p className="text-gray-400 text-[0.6rem] px-7 py-5 w-36">
              All rights received by wetbat {new Date().getFullYear()}&copy;
            </p>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
