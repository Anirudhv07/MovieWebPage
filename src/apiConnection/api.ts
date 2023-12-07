import baseURL from "./axios";

export const getAllGenres= async()=>{
    const response=await baseURL.get(`/genre/movie/list?api_key=${process.env.API_KEY}`)
    
    return response.data.genres
}


export const getMoviesByGenre=async(genreId:string)=>{
    const response=await baseURL.get(`/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`)
    return response.data
}



export const UpcomingMovies= async()=>{
    const response=await baseURL.get(`/movie/upcoming?api_key=${process.env.API_KEY}`)
    return response.data
}

export const topRatedMovies= async()=>{
    const response=await baseURL.get(`/movie/top_rated?api_key=${process.env.API_KEY}`)
    return response.data
}

export const popularMovies= async()=>{
    const response=await baseURL.get(`/movie/popular?api_key=${process.env.API_KEY}`)
    return response.data
}

export const movieDetailsById= async(id:string)=>{
    const response=await baseURL.get(`/movie/${id}?api_key=${process.env.API_KEY}`)
    return response.data
}

export const getMoviesBySearch= async(keyWord:string)=>{
    const response=await baseURL.get(`/search/movie?api_key=${process.env.API_KEY}&query=${keyWord}`)
    return response.data
}