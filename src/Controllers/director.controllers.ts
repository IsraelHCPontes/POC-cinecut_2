import {Request, Response} from 'express'
import prisma from '../db/db.js'
import { DirectorSchema } from '../Schemas/directorSchema.js';
import { newDirector , directorIsert} from '../protocols/director';

export async function insertDirector(req: Request, res: Response ) {
    const newDirector = req.body as directorIsert
    const { error } = DirectorSchema .validate(newDirector, {abortEarly: false})

    if(error){
        const erros = error.details.map(detail => detail.message)
        return res.status(400).send({mesage: erros})
    }

    try{
        await prisma.director.create({
            data: newDirector
        })
    
    res.sendStatus(201);  

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

    export async function listaDirector(req: Request, res: Response ) {
        const query = req.query;

        try{
          const director = await prisma.director.findMany()

          res.send(director.map(director => director));  

         }catch(error){

             console.log(error);
             res.sendStatus(500);
         }
      
   }



   export async function atualizaDirector(req: Request, res: Response ) {
    const id = Number(req.params.id)
    const director = req.body as newDirector

    const directorAlready = await prisma.director.findUnique({
        where: {
            id: id,
          },
    })

    if(!directorAlready){
        return res.status(401).send({message:'usuario n existe'})
    }

        try{
            const updateMovie = await prisma.director.update({
                where: {
                  id: id
                },
                data:{
                    name: director.name,
                    image: director.image,
                },
              })

            res.sendStatus(201)
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }

   }


   export async function deletaDirector(req: Request, res: Response ) {
    const id = Number(req.params.id)

    const directorAlready = await prisma.director.findUnique({
        where: {
            id: id,
          },
    })
   
    if(!directorAlready){
        return res.status(401).send({message:'usuario n existe'})
    }


    try{
        const deleteUser = await prisma.director.delete({
            where: {
              id: id,
            },
          })

        res.sendStatus(201)
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}



