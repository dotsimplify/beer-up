import React from "react";
import Link from "next/link";
import { utilsFunctions } from "../../utils/utilsFunctions";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <Link href={`/${props.id}`}>
      <div class={`${styles.container}`}>
        <div class={`${styles.card}`}>
          {props.image && (
            <div class={`${styles.imgBx}`}>
              <img src={props.image} alt={props.title} />
            </div>
          )}
          <div class={`${styles.contentBx}`}>
            <h2>{props.title}</h2>
            <h3>{utilsFunctions.stringClip(props.description)}</h3>
            <div class={`${styles.size}`}>
              <h4>Hops :</h4>
              {props.hops &&
                props.hops.length > 0 &&
                props.hops.map((single, index) => {
                  return (
                    <span key={index}>{Math.floor(single.amount.value)}</span>
                  );
                })}
            </div>
            {/* <div class={`${styles.color}`}>
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
            <a href="#">See Details</a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
