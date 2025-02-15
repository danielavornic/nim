import { Link, LinkProps } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LocalizedLink = ({ to, ...props }: LinkProps) => {
  const { i18n } = useTranslation();
  const path = to.toString();
  const localizedTo = path.startsWith("/") ? `/${i18n.language}${path}` : `/${i18n.language}/${path}`;

  return <Link {...props} to={localizedTo} />;
};

export default LocalizedLink;
