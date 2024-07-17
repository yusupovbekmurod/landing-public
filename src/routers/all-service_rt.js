import { Router } from "express";
import head from "../controller/all-service.contr.js";

const allServiceRouter = Router();

allServiceRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default allServiceRouter;
