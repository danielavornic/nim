import { Tooltip, TooltipContent } from "@/components/ui/tooltip";

import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const MegaMixTooltip = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const isMobile = width && width < 1024;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="3xl:right-[-32px] absolute right-[-28px] -bottom-1 cursor-pointer lg:-top-1"
        >
          <div className="bg-go-medium-green text-background 3xl:!size-[26px] 3xl:text-xl mb:pb-1 inline-block size-[26px] rounded-full pt-1 text-[19px] font-[950] tracking-[-0.04em] md:pt-0 lg:size-[22px]">
            ?
          </div>
        </TooltipTrigger>
        <TooltipContent
          side={isMobile ? "bottom" : "right"}
          sideOffset={0}
          className="3xl:max-w-[510px] max-w-[300px] md:max-w-[400px] lg:max-w-[400px]"
        >
          <p>{t("home.hero.megamix_description")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default MegaMixTooltip;
