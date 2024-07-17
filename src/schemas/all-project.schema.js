import { Schema, model, Types } from "mongoose";

const allProjects = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },
        project_ref_id: [{
            type: Types.ObjectId,
            ref: "projects",
            key: "_id",
            required: true,
        }]

    }
)

export default model("all-projects", allProjects);