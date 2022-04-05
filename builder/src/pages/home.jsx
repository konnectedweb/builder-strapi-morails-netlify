// @component
import CMoralis from "../components/moralis";
import CBuilder from "../components/builder";
import CStrapi from "../components/strapi";

const Home = () => {
  return (
    <>
      <CBuilder />
      <CStrapi />
      <CMoralis />
    </>
  );
};

export default Home;
