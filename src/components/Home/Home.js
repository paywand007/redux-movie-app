import { useEffect } from 'react'
 import MovieListing from '../MovieListing/MovieListing'

 import { useDispatch } from 'react-redux'
 import {fetchMovies} from '../../features/movies/movieSlice'
function Home() {
  const dispatch=useDispatch()

  useEffect(()=>{
 

 
dispatch(fetchMovies())

  },[dispatch]);
  return (
    <div>
      <div className='banner-img'>
<MovieListing />
      </div>
 
    </div>
  )
}

export default Home