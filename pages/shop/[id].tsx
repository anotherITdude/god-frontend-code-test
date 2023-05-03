import { useRouter } from "next/router";
import { Card, CardContent, Flex, Link, Spacer, Text } from "vcc-ui";
import Container from "../../src/components/Container";
import Navbar from '../../src/components/Navbar';

const ShopPage = () => {
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
        <Card extend={{ backgroundColor: "background.secondary" }}>
          <CardContent>
            <Text variant="ootah">Shop</Text>
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

export default ShopPage;
