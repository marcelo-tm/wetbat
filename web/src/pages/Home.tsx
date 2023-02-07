import { Banner } from "../components/Banner";
import info from "../data/banner_info.json";

export function HomePage() {
  return (
    <div className="p-5 w-full">
      <Banner info={info} />
    </div>
  );
}
