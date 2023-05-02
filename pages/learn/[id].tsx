import Navbar from "../../src/components/Navbar";
import { useRouter } from "next/router";

const Learn = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Navbar />
      {router.query}
    </>
  );
};

export default Learn;
