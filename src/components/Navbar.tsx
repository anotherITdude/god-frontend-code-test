import React from "react";
import { Block, Logo } from "vcc-ui";
import Container from "./Container";
import Head from "next/head";
import { navbarLayout } from "./Navbar.style";
import Link  from 'next/link';

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Anotheritdude | Frontend Test </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://www.volvocars.com/static/shared/images/favicons/apple-touch-icon-precomposed-180x180.v2.png"
        />
      </Head>
      <Block as="nav" extend={navbarLayout}>
        <Container>
          <Link href='/'><Logo type="spreadmark" height={11} /></Link>
        </Container>
      </Block>
    </>
  );
};

export default Navbar;
