import LanguageSwitcher from "@/components/language-switcher";
import LocalizedLink from "@/components/localized-link";
import Socials from "@/components/socials";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import MobileMenu from "./mobile-menu";

export const NAV_LINKS = [
  {
    labelCode: "nav.tickets",
    link: "/#tickets"
  },
  {
    labelCode: "nav.rules",
    link: "/rules"
  },
  {
    labelCode: "nav.faq",
    link: "/#faq"
  },
  {
    labelCode: "nav.partners",
    link: "/partners"
  }
];

const Header = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const { t } = useTranslation();

  return (
    <header
      className={cn(
        "bg-background 3xl:!flex-col 3xl:!justify-start flex w-full flex-col items-center gap-[30px] py-7 xl:flex-row xl:justify-center",
        className
      )}
    >
      <div className="3xl:!w-full container flex items-center justify-between px-4 lg:justify-center xl:w-auto">
        <LocalizedLink to="/">
          <img src="/logo.svg" alt="logo" className="h-auto w-[123px]" />
        </LocalizedLink>
        <MobileMenu />
      </div>

      <div className="hidden items-center justify-center gap-12 lg:flex">
        <Socials />
        <nav className="flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <LocalizedLink
              key={link.labelCode}
              to={link.link}
              className={cn(
                "hover:text-muted from-go-neon-green to-secondary line-height-[28px] bg-gradient-to-r bg-clip-text text-[28px] font-[850] uppercase underline-offset-8 transition-all duration-300 hover:scale-105 active:underline"
              )}
            >
              {t(link.labelCode)}
            </LocalizedLink>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
