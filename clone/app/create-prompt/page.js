"use client";

import {useState} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from '@components/Form';

const CreatePrompt = () => {
    const [submit, setSubmit] = useState(false);
    const [post, setPost] =useState({
        prompt : '',
        tag : '',
    });
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmit(true);
        try{
            const response = await fetch('/api/prompt/new', {
                method:'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: 'user',
                    tag: post.tag
                })
            })

            if(response.ok){
                Router.push('/');
            }
        }catch(error){
            console.log(error);
        }finally{
            setSubmit(false);
        }
    }

    return (
        <Form type="Create"
              post = {post}
              setPost={setPost}
              submit={submit}
              handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt;