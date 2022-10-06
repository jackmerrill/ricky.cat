import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { NextIntlProvider } from "next-intl";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}></NextIntlProvider>
      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
