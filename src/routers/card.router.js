import { Router } from "express";
import head from "../controller/card.contr.js";

const cardROuter = Router();

cardROuter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default cardROuter;
