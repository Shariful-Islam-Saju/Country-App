/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./style.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Country(props) {
  //const { item } = props;
  const { flags, name, population, area, capital } = props.item;
  return (
    <div className={style["container-section"]}>
      <img src={flags.png} className={style["country-img"]} alt={name.common} />
      <div>
        <p className={style.info}>
          Name: <span className={style.sp}>{name.common}</span>
        </p>
        <p className={style.info}>
          Population: <span className={style.sp}>{population}</span>
        </p>
        <p className={style.info}>
          Capital: <span className={style.sp}>{capital}</span>
        </p>
        <p className={style.info}>
          Area: <span className={style.sp}>{area}</span>
        </p>

        <button
          onClick={() => {
            props.onDelete(name.common)
            }}

          className={style.delete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
