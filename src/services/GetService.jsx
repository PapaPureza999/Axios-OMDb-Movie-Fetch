import axios from "axios";

const api = axios.create({
    baseURL: "http://www.omdbapi.com/",
});

// creating a req function
export const getMovie = () => {
    return api.get("?i=tt3896198&apikey=5b3a914d&s=titanic&page=1");
};

// api.delete(":/id");