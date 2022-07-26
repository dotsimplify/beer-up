import React from "react";
import styles from "./SingleBeerCard.module.css";

const SingleBeerCard = (props) => {
  return (
    <section
      className={`${styles.grid6} container-full w-full mx-auto min-h-screen`}
    >
      <div className={`w-full ${styles.imageDiv} `}>
        <img
          className={`${styles.image} relative`}
          src={props.image}
          alt={props.title}
        />
        <div className={`${styles.round}`}></div>
      </div>

      <div className={`${styles.colSpan3} w-full`}>
        <p className={`${styles.smallText}`}>{props.tagline}</p>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>

      <div className={`${styles.colSpan2} w-full`}>
        <p className={`${styles.smallText}`}>To Eat with Food</p>
        {props.food_pairing &&
          props.food_pairing.length > 0 &&
          props.food_pairing.map((single, index) => {
            return (
              <h4 key={index} className={`${styles.food}`}>
                😋 {single}
              </h4>
            );
          })}
        <p className={`${styles.smallText} pt-2`}>
          First Brewed On :{" "}
          <span className={`${styles.food}`}>{props.first_brewed}</span>
        </p>
        <p className={`${styles.smallText} pt-2`}>
          Boil Volume :{" "}
          <span className={`${styles.food}`}>{props.boilVolume}</span>
        </p>
        <p className={`${styles.smallText} pt-2`}>
          Attenuation Level :{" "}
          <span className={`${styles.food}`}>{props.attenuation_level}</span>
        </p>
        <p className={`${styles.smallText} pt-2`}>
          Fermentation :{" "}
          <span className={`${styles.food}`}>{props.fermentation}°C</span>
        </p>
        <p className={`${styles.smallText} pt-2`}>
          Yeast : <span className={`${styles.food}`}>{props.yeast}</span>
        </p>
        <button className={`${styles.orderButton}`}>Order Now</button>
      </div>
    </section>
  );
};

export default SingleBeerCard;
