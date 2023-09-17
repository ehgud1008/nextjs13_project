"use client";

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile';
const MyProfile = () => {
    const handleEdit = () =>{

    };
    const handleDelete = async () =>{
        
    }
    const [posts, setPosts] = useState();
    useEffect( () => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/user/posts`);
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