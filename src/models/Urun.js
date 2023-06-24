import mongoose from "mongoose";

const { Schema } = mongoose;

const UrunSchema = new Schema({
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
    },
    cat:{
        type: String,
        required: true,
    }
}, { timestamps: true });


export default mongoose.models.Urun || mongoose.model("Urun", UrunSchema);