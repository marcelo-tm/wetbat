import React from "react";
import * as HIcons from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import iconsList from "../data/icons.json";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
}

type IconsListProps = {
  [key: string]: string;
};

export function Icon({ icon, className }: IconProps) {
  const list: IconsListProps = iconsList;
  const { ...icons }: any = HIcons;
  const chosenIcon = list[icon];

  const TheIcon: JSX.Element =
    chosenIcon in icons ? (
      React.createElement(icons[chosenIcon])
    ) : (
      <QuestionMarkCircleIcon />
    );

  return (
    <div className={`w-6 h-6 ${className ? className : ""} `}>{TheIcon}</div>
  );
}
