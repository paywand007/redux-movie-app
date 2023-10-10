import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from'../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
export const fetchMovies = createAsyncThunk('movies/fetchAsyncMovies',
async ()=>{
  const text='Harry'

  const res= await movieApi.get(`?apikey=${APIKey}&s=${text}&type=movie`)
  return res.data;
}

)
export const fetchShows = createAsyncThunk('movies/fetchAsyncMovies',
async ()=>{
  const text='Harry'

  const res= await movieApi.get(`?apikey=${APIKey}&s=${text}&type=movie`)
  return res.data;
}

)
const initialState={
    movies:{},
    shows:{},
}
const movieSlice = createSlice({
name:'movies',
initialState,
reducers:{
    addMovies:(state,{payload})=>{
      state.movies=payload  
    }
},
extraReducers:{
  [fetchMovies.pending]:()=>{
    console.log('Pendding ')
  },
  [fetchMovies.fulfilled]:(state,{payload})=> {
    console.log('fetched seccessfuly')
    state.movies=payload;
// return {...state,movies:payload  }

  },
  [fetchMovies.rejected]:()=> {
    console.log('Rejected')
  }

}
 
})
export const {addMovies}=movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies
export const getAllShows=(state)=>state.movies.shows

export default movieSlice.reducer