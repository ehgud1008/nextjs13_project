"use client";

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile';
import { useRouter } from 'next/navigation';
const MyProfile = () => {
  const router = useRouter();
    const handleEdit = (post) =>{
      console.log("edit");
      console.log(post.index);
      router.push(`/update-prompt?index=${post.index}`);
    };
    const handleDelete = async (post) =>{
      console.log("delete");
      
    }
    const [posts, setPosts] = useState();
    useEffect( () => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/user11/posts`);
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }          
        fetchPosts();
    }, []);
  return (
    <Profile name="my"
        desc = "Welcomt to your personalized profile page"
        data = {posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />        
  )
}

export default MyProfile