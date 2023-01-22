import { Router } from "express";
import {insertMovie, listaMovies, atualizaMovie,deletaMovie} from '../Controllers/movie.controllers.js'

const router = Router();

router.post("/movies", insertMovie)
router.get("/movies", listaMovies)
router.put("/movies", atualizaMovie)
router.delete("/movies", deletaMovie)
export default router