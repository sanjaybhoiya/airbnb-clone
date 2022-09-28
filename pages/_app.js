import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import "../styles/global.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#fe595e",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <>
      <Head>
        <title>Dada Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/airbnb_logo.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
