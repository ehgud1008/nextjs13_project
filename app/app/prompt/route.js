import Prompt from "@models/prompt";
import { connectDB } from "@utils/database"

export const GET = async (request) => {
    try{
        await connectDB();
        const prompts = await Prompt.find({});
        // console.log(prompts);
        return new Response(JSON.stringify(prompts), {status:200});
    }catch(error){
        return new Response("prompts 데이터 조회 실패", {status : 500})
    }
} 