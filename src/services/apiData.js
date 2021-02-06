const key = '2909bb37076c77332f2a706184ab330e';
const language = 'en-US';
const timeWindow = 'day';

const apiData = {
    trending: ( mediaType ) => `/trending/${ mediaType }/${ timeWindow }?api_key=${ key }`,
    latest: `/movie/latest?api_key=${ key }&language=${ language }`,
    popular: ( page ) => `/movie/popular?api_key=${ key }&language=${ language }&page=${ page }`,
    topRated: ( page ) => `/movie/top_rated?api_key=${ key }&language=${ language }&page=${ page }`,
    movieImage: ( movieId ) => `/movie/{${ movieId }}/images?api_key=${ key }&language=${ language }`,
    searchMovie: ( movie, page ) => `/search/movie?api_key=${ key }&query=${ movie }&page=${ page }`,
    config: `/configuration?api_key=${ key }`,
}

export default apiData;
