import { Router } from "express";
import {insertMovie, listaMovies} from '../Controllers/movie.controllers.js'

const router = Router();

router.post("/movie", insertMovie)
router.get("/movies", listaMovies)

export default router