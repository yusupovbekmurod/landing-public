import { Router } from "express";
import head from "../controller/all-project.contr.js";

const allProjectRouter = Router();

allProjectRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default allProjectRouter;
