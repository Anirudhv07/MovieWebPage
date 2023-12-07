import './Banner.css'
import { Button, Typography } from '@material-tailwind/react'
import { PlayIcon } from "@heroicons/react/24/solid";
const Banner = () => {
  return (
    <div>
      <div className='banner'>
        <div className=' h-screen fadeDiv' >
          <div className="top h-2/6"></div>
          <div className='w-full h-4/6 button flex flex-col justify-end relative gap-8'>
            <div className='gap-4' >
              <Typography variant='h1'>Best viewing experience with Utsav</Typography>
              <h6 className='w-3/5'>Utsav is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With Utsav, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</h6>
            </div>
            <div>

            <Button className='flex flex-row gap-2 bg-red-900 '  size='lg'><PlayIcon className='h-4 w-4' />Start Watching Now</Button>
            </div>
          </div>
          <div className="bottom "></div>
        </div>

      </div>
    </div>
  )
}

export default Banner
