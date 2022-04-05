import { useState } from "react";
// @builder.io
import { BuilderComponent } from "@builder.io/react";
import CStrapi from "./strapi";
const CBuilder = () => {
  const [notFound, setNotFound] = useState(false);

  return (
    <>
      {!notFound ? (
        <BuilderComponent
          model="my-page"
          contentLoaded={(content) => {
            if (!content) {
              setNotFound(true);
            }
          }}
        >
          <div className="loading">Loading...</div>
        </BuilderComponent>
      ) : (
        "Not Found"
      )}
      <CStrapi />
    </>
  );
};

export default CBuilder;
