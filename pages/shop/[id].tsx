import Navbar from "../../src/components/Navbar";
import { useRouter } from "next/router";

const ShopPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Navbar />
      {router.query}
    </>
  );
};

export default ShopPage;
