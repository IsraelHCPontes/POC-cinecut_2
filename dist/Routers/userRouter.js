import { Router } from "express";
import { insertMovie } from '../Controllers/user.controllers.js';
var router = Router();
router.post("/movie", insertMovie);
export default router;
