const axios = require('axios');
const { API_KEY} = process.env;
const movies = require('../routes/index.js');
const URL = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${API_KEY}`;


const getInfoMovies = async () => {
    const apiURL = await axios.get(URL);
    const apiInfo = await apiURL.data.map(e => {
        return {
            id: e.id,
            rank: e.rank,
            title: e.title,
            rating: e.rating,
            year: e.year,
            genre: e.genre.map((g) => g),
            trailer: e.trailer,
            description: e.description,
            image: e.image,
            writers: e.writers.map((w) => w),
            director: e.director.map((d) => d),
            thumbnail: e.thumbnail 
        };
    });
    return apiInfo;
};

const getUsers = async (req, res) => {
}

const createUser = async (req, res) => {
    res.send("user created");
};
module.exports = { 
    getInfoMovies,
    getUsers,
    createUser
}