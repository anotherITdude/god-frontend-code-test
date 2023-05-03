import { useRouter } from "next/router";
import Container from '../../src/components/Container';
import { CardContent, Flex, Card, Text, Spacer } from 'vcc-ui';
import {Link}  from 'vcc-ui';
import Navbar from '../../src/components/Navbar';

const Learn = () => {
  const router = useRouter();
  return (
    <>
    <Navbar />
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
            <Text variant="ootah">Learn</Text>
            <Spacer />
            <Text>{router.query.id}</Text>
            <Spacer />
            <Link href={`/`} arrow="left" >Go Back</Link>
          </CardContent>
        </Card>
      </Flex>
      </Container>
      </>
  );
};

export default Learn;
