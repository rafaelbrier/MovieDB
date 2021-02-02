const key = '2909bb37076c77332f2a706184ab330e';
const language = 'en-US';
const timeWindow = 'day';

const apiData = {
    trending: ( mediaType ) => `/trending/${ mediaType }/${ timeWindow }?api_key=${ key }`,
    latest: `/movie/latest?api_key=${ key }&language=${ language }`,
    popular: `/movie/popular?api_key=${ key }&language=${ language }&page=1`,
    topRated: `/movie/top_rated?api_key=${ key }&language=${ language }&page=1`,
}

export default apiData;
