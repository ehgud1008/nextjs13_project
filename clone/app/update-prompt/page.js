"use client";

import {useEffect, useState} from "react";
import { useRouter,useSearchParams } from "next/navigation";

import Form from '@components/Form';

const UpdatePrompt = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const promptId = searchParams.get('index');
    console.log(promptId);
    const [submit, setSubmit] = useState(false);
    const [post, setPost] = useState({
        prompt : '',
        tag : '',
    });
    useEffect( () => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();
            console.log('@@' + data);
            setPost({
                prompt : data.prompt,
                tag : data.tag,
            });
            console.log(post);
        }

        if(promptId) getPromptDetails();
    }, [promptId])
    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmit(true);

        if(!promptId) return alert('PromptId not found');

        try{
            const response = await fetch(`/api/prompt/${promptId}`, {
                method:'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if(response.ok){
                router.push('/');
            }
        }catch(error){
            console.log(error);
        }finally{
            setSubmit(false);
        }
    }

    return (
        <Form type="Update"
              post = {post}
              setPost={setPost}
              submit={submit}
              handleSubmit={updatePrompt}
        />
    )
}

export default UpdatePrompt;