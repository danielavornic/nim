import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import InstagramIcon from "@/icons/instagram.svg?react";
import FacebookIcon from "@/icons/facebook.svg?react";
import TikTokIcon from "@/icons/tiktok.svg?react";

interface SocialsProps {
  variant?: "footer" | "header" | "mobile-menu" | "footer-light";
}

type SocialLink = {
  name: string;
  link: string;
  icon: ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/nascutinmoldova",
    icon: <InstagramIcon />
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1BCxp4tnic/?mibextid=wwXIfr",
    icon: <FacebookIcon />
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@nascutinmoldova_nim?_t=ZG-8tnJiCWlX0L&_r=1",
    icon: <TikTokIcon />
  }
];

const Socials = ({ variant = "header" }: SocialsProps) => {
  return (
    <div
      className={cn("flex items-center gap-4", {
        "justify-center gap-8": variant === "mobile-menu",
        "gap-10 md:gap-6": variant === "footer"
      })}
    >
      {SOCIAL_LINKS.map((social) => (
        <a href={social.link} key={social.name}>
          {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, {
            className: cn("size-5 hover:rotate-12 active:rotate-12 transition-transform duration-300", {
              "text-background size-12": variant === "footer",
              "text-muted size-12": variant === "footer-light",
              "size-12 hover:text-muted active:text-muted": variant === "mobile-menu",
              "text-secondary transform hover:text-muted active:text-muted": variant === "header"
            })
          })}
        </a>
      ))}
    </div>
  );
};

export default Socials;
