"use client";

import React, { useState } from 'react';
import Form from '@components/Form';

const page = () => {
  const [post, setPost] = useState(false);
  const [submit, setSubmit] = useState({
    prompt : '',
    tag : '',
  });

  const createPrompt = async (e) =>{
    
  }
  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPrompt}
    />
  )
}

export default page