import MyNavbar from '../Components/Navbar'
import Banner from '../Components/Home/Banner/Banner'
import Genres from '../Components/Home/Genres/Genres'
import UpcomingBanges from '../Components/Home/UpcomingBangers/UpcomingBanges'
import TopRated from '../Components/Home/TopRated/TopRated'
import PopularMovies from '../Components/Home/Popular/Popular'
import Footer from '../Components/Footer'


const Home = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div >
      <MyNavbar />
      <Banner />
      <div className='w-full p-24'>
  <div className='border border-solid border-gray-800 rounded-xl p-4 gap-40 space-y-12'>

    <Genres />
    <UpcomingBanges />
   
    <TopRated />
    <PopularMovies />
  </div>
</div>

<Footer/>

    </div>
  )
}

export default Home
