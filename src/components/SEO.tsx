import { Helmet } from "react-helmet-async";

const BASE_URL = "https://hospitalrumocerto.com.br";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export const SEO = ({ title, description, path }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};
