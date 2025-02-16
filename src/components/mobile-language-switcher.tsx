import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface MobileLanguageSwitcherProps {
  variant?: "header" | "footer" | "footer-light";
}

const MobileLanguageSwitcher = ({ variant }: MobileLanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-7">
      {languages.map((lang) => {
        if (lang === i18n.language) return;

        return (
          <button
            key={lang}
            onClick={() => {
              i18n.changeLanguage(lang);
            }}
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full pt-[5px] text-[28px] font-[900] uppercase",
              {
                "bg-background": variant === "footer",
                "from-go-neon-green to-secondary text-background hover:bg-muted bg-gradient-to-r":
                  variant === "footer-light",
                "bg-primary text-background hover:bg-muted": variant === "header"
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
