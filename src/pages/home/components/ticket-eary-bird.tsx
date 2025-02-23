import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const TicketEarlyBird = () => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "to-go-neon-green via-muted mx-auto w-full max-w-[500px] transform overflow-hidden rounded-[20px] bg-gradient-to-b from-transparent from-[14%] via-[57%] to-[100%] transition-all hover:scale-105 hover:drop-shadow-[0_10px_20px_-4.52px_rgba(118,198,205,0.2)] focus:scale-105 focus:drop-shadow-[0_10px_20px_-4.52px_rgba(118,198,205,0.2)] active:scale-105 lg:w-[350px] 2xl:w-[500px]"
      )}
    >
      <div className="rounded-[19.5px] p-[6px]">
        <div className="relative rounded-[19.5px] bg-gradient-to-t from-[#104B3C] to-[#0E3131] px-5 pt-[40px] pb-[50px] 2xl:pt-[50px] 2xl:pb-[60px]">
          <h3
            className={cn(
              "early-bird-gradient relative z-10 bg-clip-text text-center text-[60px] leading-[0.8] font-[900] tracking-[-0.04em] uppercase md:text-[70px] lg:text-[80px] 2xl:text-[120px]"
            )}
          >
            Early <br /> Bird
          </h3>
          <p className="early-bird-gradient-text relative z-10 mt-8 text-center text-[30px] font-[900] tracking-[-0.04em] lg:text-[40px] 2xl:mt-[50px] 2xl:mb-[40px]">
            {t(`tickets.categories.early-bird.description`)}
          </p>
          <div className="relative z-10 mt-6 flex justify-center">
            <a href="https://afisha.md" target="_blank" className="relative z-10" rel="noopener noreferrer">
              <button
                // size="lg"
                className="early-bird-button cursor-pointer text-[30px] lg:!h-[80px] lg:!w-[320px] lg:text-[35px] xl:text-[40px] 2xl:h-[96px] 2xl:!w-[416px]"
              >
                <span
                  className="early-bird-button-text"
                  // dangerouslySetInnerHTML={{
                  //   __html: t(`tickets.categories.early-bird.button`)
                  // }}
                >
                  <span className="font-[900]">{t(`tickets.categories.early-bird.days`)}</span>
                  <span className="font-[500]"> {t(`tickets.categories.early-bird.for`)} </span>
                  <span className="font-[900]">{t(`tickets.categories.early-bird.price`)}</span>
                </span>
              </button>
            </a>
          </div>
          <img
            src="/images/early-bird-bg.png"
            alt="Early Bird shadow"
            className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-full w-full scale-[1.05] transform rounded-[20px] select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketEarlyBird;
