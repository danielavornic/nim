import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useLocalizedNavigate() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (to: string, options?: { replace?: boolean }) => {
    const path = to.startsWith("/") ? to : `/${to}`;
    navigate(`/${i18n.language}${path}`, options);
  };
}
