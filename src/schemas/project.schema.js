import { Schema, model, Types } from "mongoose";

const projects = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        imageLink: {
            type: String,
            required: true
        },


    }
)

export default model("projects", projects);