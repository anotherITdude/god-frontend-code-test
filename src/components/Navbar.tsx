import Link from "next/link";
import React from "react";
import { Block, Logo } from "vcc-ui";

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
      <Logo type="spreadmark" height={11} />
    </Block>
  );
};

export default Navbar;
