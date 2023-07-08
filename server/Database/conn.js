import mongoose from "mongoose";

async function conn(){
    await mongoose.connect(process.env.MongoDB_URL)
}

export default conn
