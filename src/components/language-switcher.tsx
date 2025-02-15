import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { languages } from "@/i18n";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useLocalizedNavigate();

  return (
    <div className="flex h-6 w-[100px] items-center justify-between rounded-full bg-gradient-to-r from-[#00FAA1] to-[#8AFE6E] p-0.5 px-[9px]">
      {languages.map((lang) => {
        const isActive = lang === i18n.language;

        return (
          <button
            key={lang}
            onClick={() => {
              i18n.changeLanguage(lang);
              navigate("/", { replace: true });
            }}
            className={cn(
              "hover:border-background flex h-6 w-6 items-center justify-center rounded-full border border-transparent pt-[3px] text-[16px] leading-[1] font-extrabold uppercase transition-all",
              { "bg-background": isActive }
            )}
          >
            <span
              className={cn(
                "transition-all",
                isActive ? "bg-gradient-to-r from-[#00FAA1] to-[#8AFE6E] bg-clip-text" : "text-background"
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
