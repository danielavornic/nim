import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="bg-background min-h-screen">
      <Header className={cn({ "bg-transparent": isHome })} />

      <main className="container mx-auto p-4">
        <Outlet />
      </main>

      <Footer variant={isHome ? "light" : "dark"} />
    </div>
  );
}
