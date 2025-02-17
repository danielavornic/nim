import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { languages } from "@/i18n";

export default function RootLayout() {
  const location = useLocation();
  const isHome =
    languages.some((lang) => location.pathname === `/${lang}` || location.pathname === `/${lang}/`) ||
    location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
