import { Router } from "express";
import {insertDirector, listaDirector, atualizaDirector,deletaDirector} from '../Controllers/director.controllers.js'

const router = Router();

router.post("/director", insertDirector)
router.get("/director", listaDirector)
router.put("/director/:id", atualizaDirector)
router.delete("/director/:id", deletaDirector)

export default router