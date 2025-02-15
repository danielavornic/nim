import { languages } from "../i18n";

export function onBeforePrerender() {
  const paths = languages.map((lang) => `/${lang}`);

  return {
    paths
  };
}

export function onBeforeRender({ url }: { url: string }) {
  const lang = url.split("/")[1] || "ro";

  return {
    pageContext: {
      lang
    }
  };
}
