"use client";

import React, { useEffect, useState } from 'react';
import Form from '@components/Form';
import { useRouter, useSearchParams } from 'next/navigation';

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptIndex = searchParams.get("index");

  console.log("searchParams >> " + searchParams);

  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt : '',
    tag : '',
  });

  useEffect( () => {
    const getPromptDetails = async () =>{
      const response = await fetch(`/prompt/${promptIndex}`);
      const data = await response.json();
      
      console.log("getPromptDetails >> " + data[0]);
      setPost({
        prompt : data[0].prompt,
        tag : data[0].tag,
      })
    }
    if(promptIndex) getPromptDetails();
    
  }, [promptIndex])
  const updatePrompt = async (e) =>{
    e.preventDefault();
    setSubmit(true);
    try{
      const response = await fetch(`/prompt/${promptIndex}`, {
        method : 'PATCH',
        body : JSON.stringify({
          prompt : post.prompt,
          tag : post.tag,
          userId : 'user'
        })
      });
      
      if(response.ok){
        router.push('/profile');
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
      handleSubmit={updatePrompt}
      name = "수정"
    />
  )
}

export default UpdatePrompt;