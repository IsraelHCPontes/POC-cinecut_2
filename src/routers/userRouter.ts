import { Router } from "express";
import {insertMovie} from '../Controllers/user.controllers.js'

const router = Router();

router.post("/movie", insertMovie)



export default router