import {Request, Response} from 'express'
import connection from '../db/db.js';
import { MovieSchema } from '../Schemas/movieSchema.js';
import { Movie } from '../protocols/Movie.js';

export async function insertMovie(req: Request, res: Response ) {
    const  newMovie = req.body as Movie
    const { error } = MovieSchema.validate(newMovie, {abortEarly: false})

    if(error){
        const erros = error.details.map(detail => detail.message)
        return res.status(400).send({mesage: erros})
    }

    try{
        await connection.query(`
        INSERT INTO movie (name, image, director, score)
        VALUES ($1, $2, $3, $4)    
        `, [newMovie.name, newMovie.image, newMovie.director, newMovie.score])
    
    res.sendStatus(201);  

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

    export async function listaMovies(req: Request, res: Response ) {
                          
        try{
           const {rows} = await connection.query(`
            SELECT * 
            FROM movie  
            `)
         return res.send(rows);  
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }
   }


   export async function atualizaMovie(req: Request, res: Response ) {
       
    const movie = req.body as Movie

        try{
            const {rows} = await connection.query(`
            SELECT * 
            FROM movie 
            WHERE name = $1 
            `, [movie.name])

            if(rows.length < 1){
                return res.sendStatus(406)
            }

            await connection.query(`
            UPDATE movie
            SET "name" = $1,
                image = $2,
                director = $3,
                score = $4 
            WHERE "name" = $1
            `, [movie.name, movie.image, movie.director, movie.score])

            res.sendStatus(201)
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }

   }


   export async function deletaMovie(req: Request, res: Response ) {
    const movie = req.body as Movie

    try{
        const {rows} = await connection.query(`
        SELECT * 
        FROM movie 
        WHERE name = $1 
        `, [movie.name])

        if(rows.length < 1){
            return res.sendStatus(406)
        }

        await connection.query(`
        DELETE FROM movie
        WHERE "name" = $1
        `, [movie.name])

        res.sendStatus(201)
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}



