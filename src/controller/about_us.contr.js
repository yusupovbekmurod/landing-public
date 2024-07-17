import scoial from "../models/about_us.js";
import fs from "fs";
import path from "path";

class AboutUs {
    async get(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await scoial.select(id);
            else if (Object.keys(req.query).length)
                data = await scoial.select(null, req.query);
            else data = await scoial.select();
            return res.send({
                status: 200,
                data,
                message: "about-us",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }

    async post(req, res) {
        try {
            let { title, description, hyperlink,imageLink } = req.body;

            res.send({
                status: 201,
                data: await scoial.insert({
                    title: title,
                    description: description,
                    hyperlink: hyperlink,
                    imageLink: imageLink,
                }),
                message: "success",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                data: null,
                message: error.message,
            });
        }
    }
    async put(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await scoial.select(id);
           
                let { title, description, hyperlink,imageLink } = req.body;

                const obj = {
                    $set: {
                        title: title ? title : data.title,
                        description: description ? description : data.description,
                        hyperlink: hyperlink ? hyperlink : data.hyperlink,
                        imageLink: imageLink ? imageLink : data.imageLink,
                    },
                };

                return res.send({
                    status: 201,
                    data: await scoial.update({ _id: id }, obj),
                });
            
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async delete(req, res) {
        try {
            const id = req.params?.id;
            
            return res.send({
                status: 201,
                data: await scoial.delete(id),
                message: "success",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
}

export default new AboutUs();
