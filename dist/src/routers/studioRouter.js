import { Router } from "express";
import { insertStudio, listaStudio, atualizaStudio, deletaStudio } from '../Controllers/studio.controllers.js';
var router = Router();
router.post("/studios", insertStudio);
router.get("/studios", listaStudio);
router.put("/studios/:id", atualizaStudio);
router["delete"]("/studios/:id", deletaStudio);
export default router;
