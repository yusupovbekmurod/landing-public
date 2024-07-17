import express from "express";
import cors from "cors";
import "./db/mongo.js";
import headerRouter from "./routers/header.router.js";
import serviceRouter from "./routers/service.router.js";
import ctServiceRouter from "./routers/content-services.router.js";
import aboutUsRouter from "./routers/aboutUs.router.js";
import aboutUsNumberRouter from "./routers/about_us-number.js";
import allServiceRouter from "./routers/all-service_rt.js";
import cardROuter from "./routers/card.router.js";
import allProjectRouter from "./routers/all-project.router.js";
import projectRouter from "./routers/project.router.js";
import videoRouter from "./routers/video.router.js";
import userRouter from "./routers/users.router.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use("/headers", headerRouter);
app.use("/services", serviceRouter);
app.use("/content-services", ctServiceRouter);
app.use("/about-us", aboutUsRouter);
app.use("/about-us_number", aboutUsNumberRouter);
app.use("/all-services", allServiceRouter);
app.use("/cards", cardROuter);
app.use("/all-projects", allProjectRouter);
app.use("/projects", projectRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter)


app.listen(PORT);
console.log("server listening " + PORT);    