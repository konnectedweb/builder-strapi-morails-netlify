// @component
import CMoralis from "../components/moralis";
import CBuilder from "../components/builder";
import CStrapi from "../components/strapi";
import NFTBlance from "../components/NFTBlance";
const Home = () => {
  return (
    <>
      <CBuilder />
      <CStrapi />
      <CMoralis />
      <NFTBlance />
    </>
  );
};

export default Home;
