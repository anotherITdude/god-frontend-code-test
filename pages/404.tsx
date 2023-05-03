import React from "react";
import { Card, CardContent, Flex, Spacer, Text, View } from "vcc-ui";
import Container from '../src/components/Container';
import {Link}  from 'vcc-ui';

const NotFound = () => {
  return (
    <Container>
      <Flex
        extend={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          background: 'linear-gradient(pink, blue)',
          padding:'20px'
        }}
      >
        <Card>
          <CardContent>
            <Text variant="ootah">Not Found </Text>
            <Spacer />
            <Link href={`/`} arrow="left" >Go Back</Link>
          </CardContent>
        </Card>
      </Flex>
    </Container>
  );
};

export default NotFound;
