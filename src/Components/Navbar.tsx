import {
    Navbar,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  
   
import { MagnifyingGlassIcon,BellIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import SearchDialog from "./Search/SearchDialog";
import { useNavigate } from "react-router-dom";



const MyNavbar = () => {
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
   
    return (
        <Navbar
      variant="gradient"
      
      
      className="sticky top-0 z-10 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 bg-gray-900"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white cursor-pointer" onClick={()=>{navigate('/')}}>
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Utsav
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white" onClick={handleOpen}>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
         
        </div>
      </div>
      <SearchDialog handleOpen={handleOpen} open={open}/>
    </Navbar>
    )
}

export default MyNavbar
