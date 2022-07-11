const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f3aa129d5b48a51f9986ef06cd8e3ce0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
