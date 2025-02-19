import LocalizedLink from "@/components/localized-link";
import MobileLanguageSwitcher from "@/components/mobile-language-switcher";
import Socials from "@/components/socials";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "./header";

interface FooterProps {
  variant?: "light" | "dark";
}

const year = new Date().getFullYear();

const Footer = ({ variant = "light" }: FooterProps) => {
  const isDark = variant === "dark";
  const { t } = useTranslation();

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer
      className={cn("py-12 md:pt-20", {
        "bg-background text-muted": variant === "light",
        "bg-muted text-background": variant === "dark"
      })}
    >
      <div className="container mx-auto">
        <div className="flex h-full flex-col px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            {isDark ? (
              <>
                <img src="/nim-title-vertical-black.svg" alt="NIM" className="mx-auto w-full max-w-[400px] md:hidden" />
                <img src="/nim-title-black.svg" alt="NIM" className="hidden w-full md:block" />
              </>
            ) : (
              <>
                <img src="/nim-title-vertical.svg" alt="NIM" className="mx-auto w-full max-w-[400px] md:hidden" />
                <img src="/nim-title.svg" alt="NIM" className="hidden w-full md:block" />
              </>
            )}
          </motion.div>

          <div className="md:flex md:flex-row-reverse md:justify-between md:pt-24 md:pb-16">
            <motion.div
              className="flex flex-col items-center gap-10 py-12 md:items-end md:gap-16 md:py-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <nav className="flex flex-1 flex-col items-center gap-5 md:w-[192px] md:items-start md:gap-0">
                {NAV_LINKS.map((link) => (
                  <LocalizedLink
                    key={link.labelCode}
                    to={link.link}
                    className="block text-[40px] font-[950] uppercase underline-offset-8 transition-all duration-300 hover:underline focus:underline active:underline md:text-[28px]"
                  >
                    {t(link.labelCode)}
                  </LocalizedLink>
                ))}
              </nav>
              <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-8">
                <Socials variant={isDark ? "footer" : "footer-light"} />
                <MobileLanguageSwitcher variant={isDark ? "footer" : "footer-light"} />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-10 py-6 md:items-start md:justify-between md:py-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <div className="xs:text-[30px] flex flex-col items-center gap-2 text-[26px] leading-tight font-[950] tracking-[-0.04em] md:items-start md:gap-0.5">
                <a
                  href="tel:+37368300694"
                  className="block underline-offset-8 transition-all duration-300 hover:underline focus:underline active:underline"
                >
                  (+373) 068 300 694
                </a>
                <a
                  href="mailto:contact@versusartist.com"
                  className="block underline-offset-8 transition-all duration-300 hover:underline focus:underline active:underline"
                >
                  contact@versusartist.com
                </a>
              </div>
              <p className="mx-auto mt-8 text-4xl font-[950] tracking-[-0.04em] md:mx-0">© {year} NIM</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
