import manzil from "../models/users.models.js";

class UsersContr {
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
                message: "users",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async login(req, res) {
        try {
            let { phone_number, password } = req.body;
            let data = await manzil.select(null, {
                phone_number,
                password,
            });

            if (data.length > 0) {
                const obj = data[0];
                return res.send({
                    data: obj,
                    message: "success",
                    status: 200
                });
            }
            res.send({ status: 404, message: "Ro\'yxatdan o'tilmagan" });
        } catch (error) {
            res.send({ status: 404, message: error.message });
        }
    }
    async register(req, res) {
        try {
            let { username, phone_number, imageLink, email, password } = req.body;

            res.send({
                status: 201,
                data: await manzil.insert({
                    username: username,
                    phone_number: phone_number,
                    imageLink: `https://picsum.photos/100/100`,
                    email: email,
                    password: password
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
            let { username, phone_number, imageLink, email, password } = req.body;
            const obj = {
                $set: {
                    username: username ? username : data.username,
                    phone_number: phone_number ? phone_number : data.phone_number,
                    imageLink: imageLink ? imageLink : data.imageLink,
                    email: email ? email : data.email,
                    password: password ? password : data.password
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

export default new UsersContr();
