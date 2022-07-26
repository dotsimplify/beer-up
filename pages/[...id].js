import React from "react";
import axios from "axios";
import SingleBeerCard from "../components/card/SingleBeerCard";

const ID = (props) => {
  let obj = props.data[0];
  return (
    <SingleBeerCard
      tagline={obj.tagline}
      title={obj.name}
      description={obj.description}
      image={obj.image_url}
      food_pairing={obj.food_pairing}
      first_brewed={obj.first_brewed}
      boilVolume={`${obj.boil_volume?.value} ${obj.boil_volume?.unit}`}
      attenuation_level={obj.attenuation_level}
      fermentation={obj.method?.fermentation?.temp?.value}
      yeast={obj.ingredients?.yeast}
    />
  );
};

export default ID;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/beers/${id}`
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
