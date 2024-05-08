import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export default function Search(props) {
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    props.onSearch(search);
  }, [search]);
  return (
    <div className={style.scbox}>
      <input
        className={style.search}
        value={search}
        onChange={handleChange}
        type="text"
        id="search"
      />
    </div>
  );
}
