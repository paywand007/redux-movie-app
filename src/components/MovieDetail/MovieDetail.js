import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetails } from '../../features/movies/movieSlice'
function MovieDetail() {
  const {imdbID}=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchDetails(imdbID))
  },[dispatch])
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail