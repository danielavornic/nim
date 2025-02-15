import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{t("nav.home")}</h1>
      <p>IRINA RIMES</p>
    </div>
  );
}
