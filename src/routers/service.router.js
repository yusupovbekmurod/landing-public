import { Router } from "express";
import head from "../controller/service.contr.js";

const serviceRouter = Router();

serviceRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default serviceRouter;
