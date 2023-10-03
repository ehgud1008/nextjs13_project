import {connectDB} from '@utils/database';
import Prompt from '@models/prompt';

// GET (read)
export const GET = async (request, {params}) => {
    try{
        console.log(params);
        await connectDB();
        //index로 find 했을 때 왜 안되는지 모르겠음
        const prompt = await Prompt.find( {_id : '6517f06d20a99f5c8b52ac3b'} );
        
        console.log("Get Prompt = " + prompt);
        if(!prompt) return new Response(" Prompt not found", {status:404});
        
        return new Response(JSON.stringify(prompt), {status:200});
    }catch(error){
        return new Response("prompt 조회 실패", {status:500});
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const {prompt, tag } = await request.json();
    console.log("update >> " + params.id);
    console.log("update >> " + prompt + " , " + tag);
    try{
        await connectDB();
        //const existingPrompt = await Prompt.findby("6517f06d20a99f5c8b52ac3b");
        const existingPrompt = await Prompt.findByIdAndUpdate("6517f06d20a99f5c8b52ac3b", {
            prompt: prompt,
            tag: tag,
          });
        if(!existingPrompt) return new Response(" Prompt not found", {status:404});

        // existingPrompt.prompt = prompt;
        // existingPrompt.tag = tag;

        console.log('@!#!#!@#' + existingPrompt);
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status : 200});
    }catch(error){
        return new Response("prompt 수정 실패", {status:500});
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {
    console.log(params.id);
    try {
        await connectDB();
        
        const existingPrompt = await Prompt.findByIdAndDelete("651bd1bc1361ece25827c383");
        return new Response("prompt 삭제 성공", {status : 200});
    } catch (error) {
        return new Response("prompt 삭제 실패", {status : 500});
    }
}

