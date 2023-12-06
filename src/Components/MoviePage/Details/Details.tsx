import { Button, Rating, Typography } from '@material-tailwind/react'
import React, { useState,useEffect } from 'react'
import { CalendarIcon,LanguageIcon,StarIcon,Squares2X2Icon} from "@heroicons/react/24/solid";
import { CurrencyDollarIcon, EyeIcon, FlagIcon, GlobeAmericasIcon, ScaleIcon } from '@heroicons/react/20/solid';
import StarRating from 'react-star-rating-input';
import SimilarMovies from '../SimilarMovies/SimilarMovies';

const Details = ({ movie }: { movie: any }) => {
const [genres,setGenres]=useState('')
    const formattedReleaseDate = new Date(movie.release_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      useEffect(()=>{
        getGenres()
      })
      const getGenres=()=>{
          const similarGenres=movie.genres[0]?.name
          setGenres(similarGenres)
             

      }
    return (
        <div>
            <div className='w-full p-24 flex flex-row gap-4 text-white'>
                <div className=' w-4/6 flex flex-col gap-3'>
                    <div className='border border-solid border-gray-800 rounded-xl  flex-wrap break-words p-3 '>
                        <Typography variant='h5'>Description</Typography>
                       <Typography > {movie.overview}</Typography>
                    </div>
                    <div className='border border-solid border-gray-800 rounded-xl p-3 flex flex-col gap-3'>
                    <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><Squares2X2Icon className='h-5 w-5 '/>Genre</Typography>
                    <div className=' flex flex-row gap-2'>
                    {movie.genres.map((genres:any)=>{
                       return(
                           
                           <Button key={genres.id}>{genres.name}</Button>
                       ) 
                    })}

                    </div>
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><GlobeAmericasIcon className='h-5 w-5 '/>Origin Language</Typography>
                    <Typography>{movie.original_language}</Typography>
                    
                </div>
                    </div>
                    <div className='border border-solid border-gray-800 rounded-xl  p-3'>
                        <SimilarMovies genres={genres}/>
                    </div>

                </div>
                <div className='border border-solid border-gray-800 rounded-xl p-4 w-2/6 flex flex-col gap-4'> 

                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><CalendarIcon className='h-5 w-5 '/>Released Date</Typography>
                    <Typography>{formattedReleaseDate}</Typography>
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><LanguageIcon className='h-5 w-5 '/>Available Languages</Typography>
                    <div className=' flex flex-row gap-2'>
                    {movie.spoken_languages.map((languages:any)=>{
                       return(
                           
                           <Button key={languages.english_name}>{languages.english_name}</Button>
                       ) 
                    })}

                    </div>
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><StarIcon className='h-5 w-5 '/>Rating</Typography>
                    <Rating unratedColor="red" value={4} ratedColor="red" />
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><EyeIcon className='h-5 w-5 '/>Popularity</Typography>
                    <Typography>{movie.popularity} k</Typography>
                    
                </div>
                
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><CurrencyDollarIcon className='h-5 w-5 '/>Budget</Typography>
                    <Typography>{movie.budget / 1000000} M</Typography>
                    
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><CurrencyDollarIcon className='h-5 w-5 '/>Revenue</Typography>
                    <Typography>{movie.revenue/ 1000000} M</Typography>
                    
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><FlagIcon className='h-5 w-5 '/>Vote Count</Typography>
                    <Typography>{movie.vote_count}</Typography>
                    
                </div>
                <div >
                    <Typography className='flex flex-row gap-2 items-center' color='gray'><ScaleIcon className='h-5 w-5 '/>Vote Average</Typography>
                    <Typography>{movie.vote_average}</Typography>
                    
                </div>
                </div>
            </div>
        </div>

    )
}

export default Details
