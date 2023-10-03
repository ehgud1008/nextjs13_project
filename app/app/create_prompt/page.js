"use client";

import React, { useState } from 'react';
import Form from '@components/Form';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : '',
  });

  const createPrompt = async (e) =>{
    e.preventDefault();
    setSubmit(true);
    try{
      const response = await fetch('/create_prompt/new', {
        method : 'POST',
        body : JSON.stringify({
          prompt : post.prompt,
          tag : post.tag,
          userId : 'user'
        })
      });
      
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
    <Form post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPrompt}
      name="생성"
    />
  )
}

export default CreatePrompt;