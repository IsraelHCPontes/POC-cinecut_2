import {Request, Response} from 'express'
import prisma from '../db/db.js'
import { MovieSchema } from '../Schemas/movieSchema.js';
import { Movie, newMovie , movieIsert} from '../protocols/Movie.js';

export async function insertMovie(req: Request, res: Response ) {
    const newMovie = req.body as movieIsert
    const { error } = MovieSchema.validate(newMovie, {abortEarly: false})

    if(error){
        const erros = error.details.map(detail => detail.message)
        return res.status(400).send({mesage: erros})
    }

    try{
        await prisma.movies.create({
            data: newMovie 
        })
    
    res.sendStatus(201);  

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

    export async function listaMovies(req: Request, res: Response ) {
        const query = req.query;

        try{
          const movies = await prisma.movies.findMany()

          res.send(movies.map(movie => movie));  

         }catch(error){

             console.log(error);
             res.sendStatus(500);
         }
      
   }



   export async function atualizaMovie(req: Request, res: Response ) {
       
    const movie = req.body as newMovie

        try{
            const updateMovies = await prisma.movies.update({
                where: {
                  id: movie.id 
                },
                data:{
                    image: movie.image,
                    directorId: movie.directorId,
                    studioId: movie.studioId,
                    genre: movie.genre,
                    score: movie.score
                }
              })

            res.sendStatus(201)
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }

   }


   export async function deletaMovie(req: Request, res: Response ) {
    const movie = req.body as newMovie

    try{
        const deleteUser = await prisma.movies.delete({
            where: {
              id: movie.id
            },
          })

        res.sendStatus(201)
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}



