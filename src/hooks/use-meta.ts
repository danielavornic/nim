import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useMeta(page: string) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(`meta.${page}.title`);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t(`meta.${page}.description`));
    }

    document.documentElement.lang = i18n.language;
  }, [page, t, i18n.language]);
}
