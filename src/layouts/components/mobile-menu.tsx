import LocalizedLink from "@/components/localized-link";
import MobileLanguageSwitcher from "@/components/mobile-language-switcher";
import Socials from "@/components/socials";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "./header";

const year = new Date().getFullYear();

const MobileMenu = () => {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer lg:hidden">
          <Menu className="from-go-neon-green to-secondary size-9 bg-gradient-to-r bg-clip-text" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-background scrollbar-thin scrollbar-thumb-background scrollbar-track-background h-full min-h-[100dvh] overflow-y-auto p-0"
        hideCloseButton
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col justify-between py-[28px]">
            <SheetHeader className="flex flex-row justify-between space-y-0 p-0">
              <LocalizedLink to="/">
                <img src="/logo.svg" alt="logo" className="h-auto w-[123px]" />
              </LocalizedLink>
              <SheetClose asChild>
                <button>
                  <X className="from-go-neon-green to-secondary size-9 cursor-pointer bg-gradient-to-r bg-clip-text" />
                </button>
              </SheetClose>
            </SheetHeader>

            <div className="mt-12">
              <img src="/nim-title-vertical.svg" alt="NIM" className="mx-auto w-full max-w-[400px]" />
            </div>

            <nav className="flex flex-1 flex-col items-center gap-7 py-12">
              {NAV_LINKS.map((link) => (
                <LocalizedLink
                  key={link.labelCode}
                  to={link.link}
                  className="text-foreground hover:text-background border-primary from-go-neon-green to-secondary block w-fit border bg-gradient-to-r bg-clip-text px-5 pt-3 pb-2 text-center text-4xl font-[900] uppercase transition-colors duration-300 hover:bg-clip-padding"
                >
                  {t(link.labelCode)}
                </LocalizedLink>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-10 p-6">
              <Socials variant="mobile-menu" />
              <MobileLanguageSwitcher />

              <div className="xs:text-[30px] flex flex-col items-center gap-2 text-[26px] font-[900]">
                <a href="tel:+37368300694" className="hover:text-muted block underline-offset-4 hover:underline">
                  (+373) 068 300 694
                </a>
                <a
                  href="mailto:contact@versusartist.com"
                  className="hover:text-muted block underline-offset-8 hover:underline"
                >
                  contact@versusartist.com
                </a>
              </div>
            </div>
            <p className="mx-auto mt-8 pb-[28px] text-4xl font-[900]">© {year} NIM</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
