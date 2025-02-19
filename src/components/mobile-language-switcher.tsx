import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface MobileLanguageSwitcherProps {
  variant?: "header" | "footer" | "footer-light";
}

const MobileLanguageSwitcher = ({ variant }: MobileLanguageSwitcherProps) => {
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
    <div className="flex gap-7">
      {languages.map((lang) => {
        if (lang === i18n.language) return;

        return (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full pt-2 text-[28px] font-[850] tracking-[-0.05em] uppercase select-none md:pt-0",
              {
                "bg-background": variant === "footer",
                "from-go-neon-green to-secondary text-background hover:bg-muted active:bg-muted bg-gradient-to-r":
                  variant === "footer-light",
                "bg-primary text-background hover:bg-muted active:bg-muted": variant === "header"
              }
            )}
          >
            <span
              className={cn({
                "from-go-neon-green to-secondary bg-gradient-to-r bg-clip-text text-transparent": variant === "footer"
              })}
            >
              {lang}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MobileLanguageSwitcher;
