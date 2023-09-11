import {connectDB} from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (request) => {
    const { userId, prompt, tag} = await request.json();
    console.log(userId, prompt, tag);
    try{
        await connectDB();

        const newPrompt = new Prompt ({
            creator : userId,
            prompt, 
            tag
        });
        console.log(newPrompt);
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status:201});
    }catch(error){
        return new Response("prompt 생성 실패");
    }
}