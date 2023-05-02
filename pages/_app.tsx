import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import React from "react";
import Home from "./Index";

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <Home />
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
