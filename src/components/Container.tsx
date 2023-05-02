import React from "react";
import { Block, Text, useTheme, View } from "vcc-ui";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Block
      as="section"
      extend={{
        margin: "auto",
        padding: "10px 5px",
        fromM: {
          padding: "10px 10px",
        },
        fromL: {
          padding: "10px 15px",
        },
        fromXL: {
          padding: "10px 20px",
        },
      }}
    >
      {children}
    </Block>
  );
};
export default Container;
