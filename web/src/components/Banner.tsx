import parse from "html-react-parser";

import image from "../assets/banner_image.png";

type InfoItemProps = {
  quantity: number;
  label: string;
};

type BannerInfoProps = {
  leads: number;
  quotes: number;
  pending: number;
};

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  info: BannerInfoProps;
}

function InfoItem({ quantity, label }: InfoItemProps) {
  return (
    <div className="flex gap-2">
      <p className="text-custom-dark-yellow text-5xl font-bold drop-shadow-md">
        {quantity}
      </p>
      <p className="drop-shadow-md text-md uppercase break-words">
        {parse(label)}
      </p>
    </div>
  );
}

export function Banner({ info, className }: BannerProps) {
  return (
    <div
      className={`p-5 w-full flex justify-between gap-3 bg-gradient-to-r from-custom-dark-green to-custom-purple rounded-lg text-white ${
        className ? className : ""
      }`}
    >
      <div>
        <p className="text-3xl font-bold leading-relaxed">
          Welcome to
          <br />
          your dashboard
        </p>
        <p className="mt-4 text-sm max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>

      <div className="flex-1 ml-16 flex flex-col items-center">
        <img src={image} alt="Banner image" className="max-w-sm" />
        <div className="flex justify-between gap-5 w-full">
          <InfoItem quantity={info.leads} label="New<br />Leads" />
          <InfoItem quantity={info.quotes} label="Quotes<br />Created" />
          <InfoItem quantity={info.pending} label="Pending<br />Orders" />
        </div>
      </div>
    </div>
  );
}
