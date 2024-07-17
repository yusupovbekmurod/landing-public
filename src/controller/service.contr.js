import manzil from "../models/service.model.js";

class serviceContr {
    async get(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await manzil.select(id);
            else if (Object.keys(req.query).length)
                data = await manzil.select(null, req.query);
            else data = await manzil.select();
            return res.send({
                status: 200,
                data,
                message: "service",
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
            let { title, description, content_ref_id } = req.body;

            res.send({
                status: 201,
                data: await manzil.insert({
                    title: title,
                    description: description,
                    content_ref_id: content_ref_id

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
            if (id) data = await manzil.select(id);
            let { title, description, content_ref_id} = req.body;
            const obj = {
                $set: {
                    title: title ? title : data.title,
                    description: description ? description : data.description,
                    content_ref_id: content_ref_id ? content_ref_id : data.content_ref_id
                },
            };
            return res.send({
                status: 201,
                data: await manzil.update({ _id: id }, obj),
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
                data: await manzil.delete(id),
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

export default new serviceContr();
