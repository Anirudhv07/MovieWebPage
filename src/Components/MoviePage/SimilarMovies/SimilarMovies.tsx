import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import './SimilarMovies.css'
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { UpcomingMovies, getMoviesByGenre } from '../../../apiConnection/api';
import { Navigate, useNavigate } from "react-router-dom";



interface movieDetais{
    adult:boolean,
    backdrop_path:string,
    original_language:string,
    overview:string,
    popularity:string,
    poster_path:string,
    release_date:string,
    title:string,
    vote_average:string,
    vote_count:string
}

const SimilarMovies = ({genres}:{genres:string}) => {
    const navigate=useNavigate()
    
    const[movie,setMovies]=useState([])

    useEffect(()=>{
        getSimilarMovies()
    },[])

    const getSimilarMovies=async()=>{
        const upcomingMoviesResponse=await getMoviesByGenre(genres)
        
        setMovies(upcomingMoviesResponse.results)
    }
    
  return (
    <div>
      <div className=' gap-6'>

<div className='py-3'>
    <Typography color='white' variant='h3'>Similar Movies</Typography>
</div>
<div className='flex flex-row gap-5 overflow-scroll custom-scrollbar-hide'>
  
     {movie.map((eachMovies:any)=>{
        return(

            <div key={eachMovies.id} className='cursor-pointer' onClick={()=>{navigate(`/movie_details/${eachMovies.id}`)}}>

            <Card className="w-60 h-100vh bg-gray-900 text-white">
                <CardHeader shadow={false} floated={false} className="h-72  bg-gray-900" >
                <img
                       src={`${process.env.IMAGE_BASE_URL+eachMovies.poster_path}`}
                        alt="card-image"
                        className="  object-cover"
                    />
                   
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography className="font-medium truncate flex flex-row gap-2 items-center">
                            <CalendarIcon  color='white' className='h-4 w-4'/>
                        {eachMovies.release_date}
                        </Typography>
                        <Typography >
                            <ArrowRightIcon  color='white' className='h-4 w-4'/>
                        </Typography>
                    </div>

                </CardBody>
            </Card>
            </div>
        )
     })}    
    </div>

    
    </div>
    </div>
  )
}

export default SimilarMovies
