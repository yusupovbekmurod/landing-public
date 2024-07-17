import { Router } from "express";
import head from "../controller/contentServices.contr.js";

const ctServiceRouter = Router();

ctServiceRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default ctServiceRouter;
