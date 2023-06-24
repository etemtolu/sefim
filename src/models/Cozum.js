import mongoose from "mongoose";

const { Schema } = mongoose;

const CozumSchema = new Schema({
    context: {
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    }
}
, { timestamps: true });

export default mongoose.models.Cozum || mongoose.model("Cozum", CozumSchema);