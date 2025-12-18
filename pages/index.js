// pages/_app.js
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const siteName = "Baruch-Ermi LLC";
  const siteUrl = "https://barokgroup.org"; // keep your domain
  const email = "admin@baruchermi.org";
  const phoneDisplay = "(904) 478-9306";

  return (
    <>
      <Head>
        {/* Basic SEO defaults */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content={siteName} />
        <meta name="author" content={siteName} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph defaults */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />

        {/* Trust signals */}
        <meta name="contact" content={`${email} | ${phoneDisplay}`} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
