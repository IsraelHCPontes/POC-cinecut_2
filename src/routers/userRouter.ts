import { Router } from "express";
import {insertMovie, listaMovies, atualizaMovie} from '../Controllers/movie.controllers.js'

const router = Router();

router.post("/movie", insertMovie)
router.get("/movies", listaMovies)
router.put("/movie", atualizaMovie)

export default router