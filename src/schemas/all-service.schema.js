import { Schema, model, Types } from "mongoose";
const allServiceSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        card_ref_id: [{
            type: Types.ObjectId,
            ref: "cards",
            key: "_id",
            required: true,
        }],

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("all-services", allServiceSchema);
