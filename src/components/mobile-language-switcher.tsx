import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const MobileLanguageSwitcher = ({ variant }: { variant?: "header" | "footer" }) => {
  const { i18n } = useTranslation();
  const navigate = useLocalizedNavigate();

  return (
    <div className="flex gap-7">
      {languages.map((lang) => {
        if (lang === i18n.language) return;

        return (
          <button
            key={lang}
            onClick={() => {
              i18n.changeLanguage(lang);
              navigate("/", { replace: true });
            }}
            className={cn(
              "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full pt-[5px] text-[29px] font-[900] uppercase",
              {
                "bg-background": variant === "footer",
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
