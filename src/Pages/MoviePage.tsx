import React, { useEffect, useState } from 'react'
import MyNavbar from '../Components/Navbar'
import MovieBanner from '../Components/MoviePage/MovieBanner/MovieBanner'
import { useParams } from 'react-router-dom'
import { movieDetailsById } from '../apiConnection/api'
import Details from '../Components/MoviePage/Details/Details'
import Footer from '../Components/Footer'


interface Genre {
    id: number;
    name: string;
  }
  
  interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  



  export const initialMovieDetails: MovieDetails = {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  };
  
const MoviePage = () => {
    const {id}=useParams()

    const [movie,setMovie]=useState(initialMovieDetails)
    useEffect(()=>{
        getMovieDetails()
    },[])

    const getMovieDetails=async()=>{
        const response=await movieDetailsById(id as string)
        setMovie(response)
        
    }

  return (
    <div>
      <MyNavbar />
      <MovieBanner movie={movie} />
      <Details movie={movie}/>
      <Footer />
    </div>
  )
}

export default MoviePage
