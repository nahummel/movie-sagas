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

router.put('/:id', (req,res) => {
    const queryText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE id=$3;`
    const values = [req.body.title, req.body.description, req.params.id];
    pool.query(queryText, values).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in server put')
        res.sendStatus(500);
    });
});

module.exports = router