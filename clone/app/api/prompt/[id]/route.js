import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';

// GET (read)
export const GET = async (request, {params}) => {
    try{
        await connectToDB();
        const prompt = await Prompt.find( {_id : '64fec9684616bb4618e93aff'} );
        
        console.log("Get Prompt = " + prompt);
        if(!prompt) return new Response(" Prompt not found", {status:404});
        
        return new Response(JSON.stringify(prompt), {status:200});
    }catch(error){
        return new Response("Failed to fetch all prompts", {status:500});
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const {prompt, tag } = await request.json();
    try{
        await connectToDB();
        const existingPrompt = await Prompt.findByIdAndUpdated(params.id);

        if(!existingPrompt) return new Response(" Prompt not found", {status:404});

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        console.log('@!#!#!@#' + existingPrompt);
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status : 200});
    }catch(error){
        return new Response("Failed to fetch all prompts", {status:500});
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {

    try {
        await connectToDB();
        
        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt deleted Success", {status : 200});
    } catch (error) {
        return new Response("Failed to delete Prompt", {status : 500});
    }
}

