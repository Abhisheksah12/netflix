
const API_key="a8f0efe28d5a161b3c5c1f5b534fa7bd";

const requests ={
    fetchNetflixOriginals:`/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTrending:`/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
};

export default requests;

