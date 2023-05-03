import React from "react";
import type { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Layout from "../src/components/Layout";
import "../public/css/styles.css";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
