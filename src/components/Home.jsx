/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [isLoding, setIsLoding] = useState(true);
  const [isError, setIsError] = useState(null);
  const [contries, setContries] = useState([]);
  const [filteredContries, setfilteredContries] = useState(contries);

  function handleDelete(id) {
    const name = id.toLowerCase();

    const filter = filteredContries.filter(
      (item) => item.name.common.toLowerCase() !== name
    );
    setfilteredContries(filter);
  }


  function search (name) {
    console.log(name)
    const newC = name.toLowerCase()
    const searchedCountry = contries.filter(item => {
      const n = item.name.common.toLowerCase()
      return n.startsWith(newC) ;
    })
    setfilteredContries(searchedCountry)
  }

  async function fetchData(url) {
    setIsLoding(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsError(null);
      setIsLoding(false);
      setContries(data);
      setfilteredContries(data);
    } catch (error) {
      setIsError(error);
      setIsLoding(false);
      console.log(error);
    }

    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Not Fetching...");
    //     }
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setIsLoding(false);
    //     setIsError(null);
    //     setContries(res);
    //   })
    //   .catch((error) => {
    //     setIsLoding(false);
    //     setIsError(error);
    //     console.log(error);
    //   });
  }

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div>
      {isLoding && <h1>Data Loding....</h1>}
      {isError && <h2>No Connection</h2>}
      {(!isLoding && !isError)&& <Search onSearch={search} />}
      {contries && <Countries all={filteredContries} onDelete={handleDelete} />}
    </div>
  );
}
