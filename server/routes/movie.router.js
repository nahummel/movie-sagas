const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM movies ORDER BY title ASC;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error on get movies: ${error}`);
        res.sendStatus(500);
    }); 
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT "name" FROM "genres" JOIN "junction" ON genres.id = "genre_id" JOIN "movies" ON movies.id = "movie_id" WHERE "movie_id" = $1;`;
    const values = [req.params.id]
    pool.query(queryText, values).then((result)=>{
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error on get genres ${error}`)
        res.sendStatus(500);
    });
});

module.exports = router