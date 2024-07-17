import { Schema, model, Types } from "mongoose";
const servicesSchema = new Schema(
    {

        username: {
            type: String,
            required: true
        },
        phone_number: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        imageLink: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("users", servicesSchema);
