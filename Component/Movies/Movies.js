import { useState } from "react"
import Header from "../Header/Header"
import axios from 'axios';
import './Movie.css'


const Movie = ()=>{
    const [movie, setMovie] =  useState([])
    const [query,  setQuery] = useState('')


    const searchMovie = async (e) =>{
e.preventdefault();
const API_KEY = "b57e0c63 "
const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;


try{
    const respose =  await axios.get(apiURI);
    const data =  respose.data.search;
    console.log(data)
    setMovie(data)
}catch (error){
    console.error(error)
}
    }



    return(
        <div   className="shoppies">
            <Header 
            searchMovie = {searchMovie}
            query = {query}
            setQuery = {setQuery}
            movie={movie}
            />
        </div>

    )
}
export  default  Movie