import { Schema, model, Types } from "mongoose";
const servicesSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        video: {
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

export default model("videos", servicesSchema);
