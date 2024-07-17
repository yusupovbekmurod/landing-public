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
        content_ref_id: [{
            type: Types.ObjectId,
            ref: "content-services",
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

export default model("services", servicesSchema);
