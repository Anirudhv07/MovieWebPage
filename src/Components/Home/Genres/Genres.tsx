import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import './Genres.css'
import { getAllGenres, getMoviesByGenre } from '../../../apiConnection/api';

interface eachGenres{
    id:string,
    name:string
}
interface GenresResponse {
    id: string;
    name: string;
  }
  
  interface Movie {
    id: number;
    title: string;
    poster_path: string;
  }
  
  interface GenreWithMovies extends GenresResponse {
    movies: Movie[];
  }
  
const Genres = () => {
    const [genres, setGenres] = useState<GenreWithMovies[]>([]);
   
    useEffect(() => {
        getGenres()
    },[])

    const getGenres = async () => {
        const genresResponse = await getAllGenres();
    
        const genresWithMovies = await Promise.all(
          genresResponse.map(async (genre: GenresResponse) => {
            const moviesResponse = await getMoviesByGenre(genre.id);
            const movies = moviesResponse.results.slice(0, 4);
            return { ...genre, movies };
          })
        );
    
        setGenres(genresWithMovies);
      };

      console.log(genres,'gnere');
      
    return (
        
        <div className=' gap-6'>

        <div className='py-3'>
            <Typography color='white' variant='h3'>Our Genres</Typography>
        </div>
        <div className='flex flex-row gap-5 overflow-scroll custom-scrollbar-hide'>
            {genres.slice(0,10).map((eachGenres:GenreWithMovies) => {
                return (
                    <div key={eachGenres.id}>

                    <Card className="w-64 h-100 bg-gray-900 text-white">
                        <CardHeader shadow={false} floated={false} className="h-72 flex flex-col gap-1 bg-gray-900" >

                            <div className='flex flex-row h-1/2 gap-1 justify-between'>

                            <img
                                src={process.env.IMAGE_BASE_URL+eachGenres.movies[0].poster_path}
                                alt="card-image"
                                className=" w-1/2 object-cover"
                            />
                             <img
                                 src={process.env.IMAGE_BASE_URL+eachGenres.movies[1].poster_path}
                                alt="card-image"
                                className=" w-1/2 object-cover"
                            />
                            </div>
                            <div className='flex flex-row h-1/2 gap-1 justify-between'>
                            <img
                                 src={process.env.IMAGE_BASE_URL+eachGenres.movies[2].poster_path}
                                alt="card-image"
                                className=" w-1/2 object-cover"
                            />
                             <img
                                 src={process.env.IMAGE_BASE_URL+eachGenres.movies[3].poster_path}
                                alt="card-image"
                                className=" w-1/2 object-cover"
                            />
                            </div >
                           
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography className="font-medium">
                                    {eachGenres.name}
                                </Typography>
                                <Typography >
                                    <ArrowRightIcon  color='white' className='h-4 w-4'/>
                                </Typography>
                            </div>

                        </CardBody>
                    </Card>
                    </div>
                )
            })
            }
              {/* <div className='h-1/5 w-2/5 self-center'>

<Button className='flex flex-row items-center'>See more <ArrowRightIcon  color='white' className='h-4 w-4'/></Button>
</div> */}
        </div>
        </div>
    )
}

export default Genres
