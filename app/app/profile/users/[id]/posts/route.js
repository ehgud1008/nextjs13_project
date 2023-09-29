import {connectDB} from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async(request, {params}) => {
    try {
        await connectDB();
        const prompts = await Prompt.find({
            creator : params.id,
        });
        console.log(params.id + "의 prompts >> " + prompts);
        return new Response(JSON.stringify(prompts), {status:200})
    } catch (error) {
        return new Response("prompts 조회 실패", {status:500});
    }
}
