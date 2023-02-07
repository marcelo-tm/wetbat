import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import menus from "../data/menus.json";
import { Navigation } from "../components/Navigation";

export function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex">
        <Navigation menus={menus} />
        <Outlet />
      </main>
    </div>
  );
}
