import React from "react";
import type { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import Home from "./Home";

const HomePage = ({ Component, pageProps }: AppProps) => {
  const newLocal = <Component {...pageProps} />;
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <Home />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
};

export default HomePage;
