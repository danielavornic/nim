import LocalizedLink from "@/components/localized-link";
import MobileLanguageSwitcher from "@/components/mobile-language-switcher";
import Socials from "@/components/socials";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "./header";
import { motion } from "framer-motion";
import { createFadeUpVariants, containerVariants } from "@/lib/animations";

const year = new Date().getFullYear();

const MobileMenu = () => {
  const { t } = useTranslation();

  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer lg:hidden">
          <Menu className="from-go-neon-green to-secondary size-9 bg-gradient-to-r bg-clip-text" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background scrollbar-thin scrollbar-thumb-background scrollbar-track-background h-full min-h-[100dvh] w-[100.5dvw] overflow-y-auto p-0 px-4 sm:w-screen sm:max-w-none sm:pl-10"
        hideCloseButton
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <div className="container mx-auto h-full">
          <motion.div
            className="flex h-full flex-col justify-between py-[28px]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <SheetHeader className="flex flex-row justify-between space-y-0">
              <motion.div variants={fadeUpVariants}>
                <LocalizedLink to="/">
                  <img src="/images/logo.svg" alt="logo" className="h-auto w-[123px]" />
                </LocalizedLink>
              </motion.div>
              <motion.div variants={fadeUpVariants}>
                <SheetClose asChild>
                  <button aria-label="Close menu">
                    <X className="from-go-neon-green to-secondary size-9 cursor-pointer bg-gradient-to-r bg-clip-text" />
                  </button>
                </SheetClose>
              </motion.div>
              <SheetTitle className="sr-only">NIM</SheetTitle>
              <SheetDescription className="sr-only">Mobile Menu</SheetDescription>
            </SheetHeader>

            <motion.div className="mt-12" variants={fadeUpVariants}>
              <img src="/images/nim-title-vertical.svg" alt="NIM" className="mx-auto block w-full max-w-[400px]" />
            </motion.div>

            <nav className="flex flex-1 flex-col items-center gap-7 py-12">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.labelCode} variants={fadeUpVariants}>
                  <SheetClose asChild>
                    <LocalizedLink
                      to={link.link}
                      className="text-foreground hover:text-background active:text-background border-primary from-go-neon-green to-secondary block w-fit border bg-gradient-to-r bg-clip-text px-5 py-2 text-center text-4xl font-[950] uppercase transition-colors duration-300 select-none hover:bg-clip-padding active:bg-clip-padding"
                    >
                      {t(link.labelCode)}
                    </LocalizedLink>
                  </SheetClose>
                </motion.div>
              ))}
            </nav>

            <motion.div className="flex flex-col items-center gap-10 p-6" variants={fadeUpVariants}>
              <Socials variant="mobile-menu" />
              <MobileLanguageSwitcher />

              <div className="xs:text-[30px] flex flex-col items-center gap-2 text-[26px] font-[950] tracking-[-0.04em]">
                {/* <a
                  href="tel:+37368300694"
                  className="hover:text-muted active:text-muted block underline-offset-4 hover:underline active:underline"
                >
                  (+373) 068 300 694
                </a> */}
                <a
                  href="mailto:contact@nim.md"
                  className="hover:text-muted active:text-muted block underline-offset-8 hover:underline active:underline"
                >
                  contact@nim.md
                </a>
              </div>
            </motion.div>
            <motion.p className="mx-auto mt-8 pb-[28px] text-4xl font-[950]" variants={fadeUpVariants}>
              © {year} NIM
            </motion.p>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
