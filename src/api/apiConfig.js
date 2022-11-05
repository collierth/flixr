const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: '5466b7f9715fde9407c767ec4cfbdb90',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;