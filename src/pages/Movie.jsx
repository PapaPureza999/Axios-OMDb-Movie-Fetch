// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);
  // const API = "http://www.omdbapi.com/?i=tt3896198&apikey=5b3a914d&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      // const res = await axios.get(API)
      // console.log(res);
      // console.log(res.data);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      // console.log("Failed to fetch movie: ",error.message);
      console.error("Error Message:", error.message);
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })}
    </ul>
  );
};
