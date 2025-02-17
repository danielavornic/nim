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
    const scrollToHash = () => {
      if (location.hash) {
        setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToHash();

    window.addEventListener("load", scrollToHash);

    return () => {
      window.removeEventListener("load", scrollToHash);
    };
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
