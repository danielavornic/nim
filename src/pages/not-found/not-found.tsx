import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/localized-link";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="404 - Page Not Found" description={t("notFound.description")} noindex={true} />
      <section className="bg-muted text-background min-h-[calc(90dvh-var(--header-height-mobile))] py-20 lg:min-h-[calc(90dvh-var(--header-height-desktop))] xl:pt-32 xl:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="4xl:!text-9xl text-[160px] leading-tight font-black uppercase lg:text-[200px] 2xl:text-[250px]">
              404
            </h1>

            <p className="mt-6 text-3xl !leading-tight font-bold lg:text-4xl">{t("notFound.title")}</p>

            <p className="mt-4 text-lg md:text-2xl">{t("notFound.description")}</p>

            <Button className="mt-12" asChild>
              <LocalizedLink to="/">{t("notFound.backHome")}</LocalizedLink>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
