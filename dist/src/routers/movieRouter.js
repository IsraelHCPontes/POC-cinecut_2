import { Router } from "express";
import { insertMovie, listaMovies, atualizaMovie, deletaMovie } from '../Controllers/movie.controllers.js';
var router = Router();
router.post("/movies", insertMovie);
router.get("/movies", listaMovies);
router.put("/movies/:id", atualizaMovie);
router["delete"]("/movies/:id", deletaMovie);
export default router;
