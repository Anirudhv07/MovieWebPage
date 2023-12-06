import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { topRatedMovies } from '../../../apiConnection/api';
import './TopRated.css'
const itemsPerPage = 5

const TopRated = () => {
    
    const[movie,setMovies]=useState([])

    useEffect(()=>{
        getTopRatedMovies()
    },[])

    const getTopRatedMovies=async()=>{
        const topRatedMoviesResponse=await topRatedMovies()
        
        setMovies(topRatedMoviesResponse.results)
    }
    const [pagination,setPagination]=useState(1)

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedMovies = movie.slice(startIndex, endIndex);
  
    const handlePageChange = (pageNumber:number) => {
        setPagination(pageNumber)
      setCurrentPage(pageNumber);
    };
  return (
    <div>
      <div className=' gap-6'>

<div className='py-3'>
    <Typography color='white' variant='h3'>Top-Rated Movies</Typography>
</div>
<div className='flex flex-row gap-5 overflow-scroll custom-scrollbar-hide'>
  
     {displayedMovies.map((eachMovies:any)=>{
        return(

            <div key={eachMovies._id}>

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

    <div className='h-1/5 w-full justify-end self-center flex flex-row py-5'>
    <Button
  className='flex flex-row items-center'
  onClick={() => handlePageChange(currentPage - 1)}
  disabled={pagination<2 ? true : false}
>
     <ArrowLeftIcon color='white' className='h-4 w-4'/>
  </Button>
  <span className='mx-4 my-auto text-white'>{currentPage}</span>
  <Button
  className='flex flex-row items-center'
  onClick={() => handlePageChange(currentPage + 1)}
  disabled={pagination>3 ? true : false}
>
  <ArrowRightIcon color='white' className='h-4 w-4' />
</Button>
</div>
    </div>
    </div>
  )
}

export default TopRated
