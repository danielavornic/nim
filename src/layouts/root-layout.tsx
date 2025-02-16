import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import SmoothScroll from "@/components/smooth-scroll";

export default function RootLayout() {
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/ro/" ||
    location.pathname === "/en/" ||
    location.pathname === "/ru/" ||
    location.pathname === "/ro" ||
    location.pathname === "/en" ||
    location.pathname === "/ru";

  return (
    <div>
      {!isHome && <Header className={cn({ "bg-transparent": isHome })} />}

      <main>
        <Outlet />
      </main>

      <Footer variant={isHome ? "dark" : "light"} />
    </div>
  );
}
