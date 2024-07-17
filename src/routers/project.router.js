import { Router } from "express";
import head from "../controller/project.contr.js";

const projectRouter = Router();

projectRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default projectRouter;
