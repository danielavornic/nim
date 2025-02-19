import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (lang: string) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(`/${i18n.language}`, `/${lang}`);
    i18n.changeLanguage(lang);
    navigate(newPath);
  };

  return (
    <div className="from-go-neon-green to-secondary flex h-6 w-[100px] items-center justify-between rounded-full bg-gradient-to-r p-0.5 px-[9px]">
      {languages.map((lang) => {
        const isActive = lang === i18n.language;

        return (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={cn(
              "hover:border-background flex h-6 w-6 items-center justify-center rounded-full border border-transparent text-[16px] leading-[16px] font-extrabold uppercase transition-all",
              { "bg-background": isActive }
            )}
          >
            <span
              className={cn(
                "transition-all",
                isActive ? "from-go-neon-green to-secondary bg-gradient-to-r bg-clip-text" : "text-background"
              )}
            >
              {lang}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
