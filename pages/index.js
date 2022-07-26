import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Search from "../components/search/Search";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import { utilsFunctions } from "../utils/utilsFunctions";

const index = (props) => {
  const router = useRouter();
  const { page } = router.query;
  const [searchString, setSearchString] = useState("");
  let searchArray = utilsFunctions.performSearchQuery(
    props.data,
    searchString,
    "name"
  );
  return (
    <main className="container mx-auto">
      <Search searchString={searchString} setSearchString={setSearchString} />
      {searchString && (
        <h2 className={`search-h2 `}>Search Results for {searchString}</h2>
      )}
      <div className="show-grid-4 container-full center mx-auto">
        {!searchString
          ? props.data &&
            props.data.length > 0 &&
            props.data.map((beer, index) => {
              return (
                <Card
                  id={beer.id}
                  image={beer.image_url}
                  tagline={beer.tagline}
                  title={beer.name}
                  description={beer.description}
                  hops={beer.ingredients.hops}
                  key={index}
                />
              );
            })
          : searchString &&
            searchArray &&
            searchArray.length > 0 &&
            searchArray.map((beer, index) => {
              return (
                <Card
                  id={beer.id}
                  image={beer.image_url}
                  tagline={beer.tagline}
                  title={beer.name}
                  description={beer.description}
                  hops={beer.ingredients.hops}
                  key={index}
                />
              );
            })}
      </div>
      {searchString && !searchArray.length && (
        <h2
          className={`search-h2 ${
            searchString && !searchArray.length && `pb-10`
          }`}
        >
          😟 Nothing found
        </h2>
      )}
      {!searchString && (
        <div className="mx-auto container">
          <Pagination currentPage={page ? page : 1} />
        </div>
      )}
    </main>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { page } = context.query;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/beers?page=${page ? page : 1}`
  );

  const data = await res.data;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
