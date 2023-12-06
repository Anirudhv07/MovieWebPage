import React from 'react'
import './MovieBanner.css'
import { Button, Typography } from '@material-tailwind/react'
import { PlayIcon,PlusIcon,HandThumbUpIcon,SpeakerWaveIcon } from "@heroicons/react/24/solid";
const MovieBanner = ({movie}:{movie:any}) => {

  const gradientStyle: React.CSSProperties = {
    backgroundSize: 'cover',
    color:'white',
    backgroundImage: `linear-gradient(180deg, transparent, rgba(37, 37, 37, .61), #000000),url(${process.env.IMAGE_BASE_URL + movie.backdrop_path})`,  // Set the background image here
  };
  return (
    <div>
      <div style={gradientStyle}>
        <div className=' h-screen fadeDiv' >
          <div className="top h-2/6"></div>
          <div className='w-full h-4/6 button flex flex-col justify-end relative gap-8'>
            <div className='gap-6' >
              <Typography variant='h2'>{movie.title}</Typography>
              <h6 className='w-3/5'>{movie.tagline}</h6>
            </div>
            <div className='flex flex-row gap-2 self-center'>

            <Button className='flex flex-row gap-2 bg-red-900 '  size='lg'><PlayIcon className='h-4 w-4' />Play  Now</Button>
            <Button><PlusIcon className='h-5 w-5' /></Button>
            <Button><HandThumbUpIcon className='h-5 w-5' /></Button>
            <Button><SpeakerWaveIcon className='h-5 w-5' /></Button>

            </div>
          </div>
          <div className='bottom'></div>
        </div>

      </div>
    </div>
  )
}

export default MovieBanner
