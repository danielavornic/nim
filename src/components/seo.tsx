import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  noindex?: boolean;
}

export function SEO({ title, description, keywords, url, noindex }: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const defaultTitle = t("meta.home.title");
  const defaultDescription = t("meta.home.description");
  const defaultKeywords = t("meta.home.keywords");
  const siteUrl = "https://nim.md";

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />

      <link rel="alternate" hrefLang="ro" href={`${siteUrl}/ro${url || ""}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${url || ""}`} />
      <link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru${url || ""}`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}
