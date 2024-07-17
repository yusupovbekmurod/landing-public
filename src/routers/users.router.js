import { Router } from "express";
import head from "../controller/users.contr.js";

const userRouter = Router();

userRouter
    .get("/", head.get)
    .get("/:id", head.get)
    .post("/login",head.login) 
    .post("/", head.register)
    .put("/:id", head.put)
    .delete("/:id", head.delete);

export default userRouter;
