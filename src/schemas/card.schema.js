import { Schema, model, Types } from "mongoose";
const cardSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        referal: {
            type: String,
            required: true,
        },
        imageLink: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("cards", cardSchema);
