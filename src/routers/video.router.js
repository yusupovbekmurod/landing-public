import { Router } from "express";
import head from "../controller/vide.contr.js";

const videoRouter = Router();

videoRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default videoRouter;
