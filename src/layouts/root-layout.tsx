import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function RootLayout() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const handleLanguageChange = (newLang: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <div className="bg-background min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <ul className="flex gap-4"></ul>

            <div className="flex gap-2">
              {["ro", "en", "ru"].map((lng) => (
                <Button
                  key={lng}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLanguageChange(lng)}
                  className={i18n.language === lng ? "bg-accent" : ""}
                >
                  {lng.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
