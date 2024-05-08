import React from 'react'
import Country from './Country'
import { v4 as uuidv4 } from "uuid";

import style from './style.module.css'

export default function Countries(props) {
  return (
    <div className={style.container}>
      {props.all.map(item => <Country  key={uuidv4()} item={item} onDelete={props.onDelete} id={uuidv4()} />)}
    </div>
  );
}
