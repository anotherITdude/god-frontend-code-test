import Link from "next/link";
import React from "react";
import { Block, Logo } from "vcc-ui";
import Container from "./Container";

const Navbar = () => {
  return (
    <Block
      as="nav"
      extend={{
        backgroundColor: "background.secondary",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <Container>
        <Logo type="spreadmark" height={11} />
        </Container>
    </Block>
  );
};

export default Navbar;
