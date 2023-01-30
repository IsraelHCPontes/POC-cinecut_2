import {Request, Response} from 'express'
import prisma from '../db/db.js'
import { StudioSchema } from '../Schemas/studioSchema.js';
import { newStudio , studioIsert} from '../protocols/studio';

export async function insertStudio(req: Request, res: Response ) {
    const newStudio = req.body as studioIsert
    const { error } = StudioSchema .validate(newStudio, {abortEarly: false})

    if(error){
        const erros = error.details.map(detail => detail.message)
        return res.status(400).send({mesage: erros})
    }

    try{
        await prisma.studio.create({
            data: newStudio
        })
    
    res.sendStatus(201);  

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

    export async function listaStudio(req: Request, res: Response ) {
        const query = req.query;

        try{
          const studio = await prisma.studio.findMany()

          res.send(studio.map(studio => studio));  

         }catch(error){

             console.log(error);
             res.sendStatus(500);
         }
      
   }



   export async function atualizaStudio(req: Request, res: Response ) {
    const id = Number(req.params.id)
    const studio = req.body as newStudio

    const studioAlready = await prisma.studio.findUnique({
        where: {
            id: id,
          },
    })

    if(!studioAlready){
        return res.status(401).send({message:'usuario n existe'})
    }

        try{
            const updateMovie = await prisma.studio.update({
                where: {
                  id: id
                },
                data:{
                    name: studio.name,
                },
              })

            res.sendStatus(201)
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }

   }


   export async function deletaStudio(req: Request, res: Response ) {
    const id = Number(req.params.id)

    const studioAlready = await prisma.studio.findUnique({
        where: {
            id: id,
          },
    })
   
    if(!studioAlready){
        return res.status(401).send({message:'usuario n existe'})
    }


    try{
        const deleteUser = await prisma.studio.delete({
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



