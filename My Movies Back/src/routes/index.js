const { Router } = require("express");
const { getInfoMovies } = require('../controllers/index.js');
const Movies = require("../models/Movies.js");
const router = Router();

router.get('/movies', async (req, res) => {
    const name = req.query.name;
    const movies = await getInfoMovies();
    try{
        if(name) {
            const movieSelected = movies.filter((movie) => movie.name.toLoweCase().includes(name.toLocaleLowerCase()))
            if(movieSelected.length){
                return res.status(200).send(movieSelected)
            } else {
                return res.status(404).send({error: 'The movie has not exist.'})
            }
        } else{
            return res.status(201).json(movies)
        }
    } catch(error){
        return res.status(404).send({error: 'The movie has not exist.'})
    }
})

router.post('/movies', async (req, res) => {
    let{
        id,
        title,
        rank,
        rating,
        year,
        director,
        writers,
        genre,
        trailer,
        description,
        image,
        thumbnail
    } = req.body;

    const movieChecked = await Movies.findOne({
        where: { title: title }
    })
})
module.exports = router;