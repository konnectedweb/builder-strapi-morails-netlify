import { useState, useEffect } from "react";
// @axios from strapi
import axios from "axios";

const CStrapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      // @strapi
      const posts = await axios.get(
        process.env.REACT_APP_STRAPI_API + "api/nfts"
      );
      if (isSubscribed) {
        console.log(posts.data.data);
        setData(posts.data.data);
      }
    };

    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <p key={index} className="text_strapi">
            {item.attributes.name}
          </p>
        );
      })}
    </>
  );
};

export default CStrapi;
