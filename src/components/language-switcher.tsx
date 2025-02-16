import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="from-go-neon-green to-secondary flex h-6 w-[100px] items-center justify-between rounded-full bg-gradient-to-r p-0.5 px-[9px]">
      {languages.map((lang) => {
        const isActive = lang === i18n.language;

        return (
          <button
            key={lang}
            onClick={() => {
              i18n.changeLanguage(lang);
            }}
            className={cn(
              "hover:border-background flex h-6 w-6 items-center justify-center rounded-full border border-transparent pt-[3px] text-[16px] leading-[1] font-extrabold uppercase transition-all",
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
