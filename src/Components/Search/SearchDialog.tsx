import React,{useState} from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { getMoviesBySearch } from "../../apiConnection/api";
 import './SearchMovies.css'
import { useNavigate } from "react-router-dom";


interface dialog {
    handleOpen: () => void,
    open: boolean,
 
  }
const SearchDialog:React.FC<dialog>=({handleOpen,open})=> {
 const [searchMovies,setSearchMovies]=useState('')
 const navigate=useNavigate()

 const [movieList,setMovieList]=useState([])
    const handleSearch=async(e:any)=>{
        event?.preventDefault()
        setSearchMovies(e.target.value)
        const response=await getMoviesBySearch(searchMovies)
        console.log(response,'search');
        
        setMovieList(response.results)
        
    }
    
    
 
  return (
    <>
     <div className="text-white">
      <Dialog className="text-white max-h-30px " size="md" open={open} handler={handleOpen} style={{backgroundColor:'black'}}>
        <DialogHeader className="text-white flex flex-col">
            <div>
                <Typography variant="h3">Search</Typography>
            </div>
            <div>

         <Input label="Username" className="text-white bg-gray-700 " onChange={handleSearch} crossOrigin={undefined} />
            </div>
        </DialogHeader>
        <DialogBody  className="text-white overflow-scroll custom-scrollbar-hide" style={{ maxHeight: "64vh" }}>
            <div className="flex flex-col gap-3">
                {movieList.map((movie:any)=>{
                    return(
                        <>
                        <div className="flex flex-row gap-3 cursor-pointer" onClick={()=>{navigate(`/movie_details/${movie.id}`)}}>

                        <Avatar src={process.env.IMAGE_BASE_URL+movie.poster_path} alt="avatar" variant="square" />
                        <Typography>{movie.title}</Typography>
                        </div>
                        </>
                    )

                })}
            </div>

        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

     </div>
    </>
  );
}

export default SearchDialog