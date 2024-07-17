import { Router } from "express";
import head from "../controller/about_us.contr.js";

const aboutUsRouter = Router();

aboutUsRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default aboutUsRouter;
