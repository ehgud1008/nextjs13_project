import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if(isConnected) {
        console.log('MongoDB가 이미 연결되어 있습니다.');
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "project1",
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })

        isConnected = true;

        console.log("MongoDB 연결 완료");
    }catch(error){
        console.log(error);
    }
}