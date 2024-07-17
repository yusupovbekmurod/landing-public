import { Router } from "express";
import head from "../controller/about_us-number.js";

const aboutUsNumberRouter = Router();

aboutUsNumberRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/", head.post)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default aboutUsNumberRouter;
