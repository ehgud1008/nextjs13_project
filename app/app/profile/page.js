"use client";
import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile';
import { useRouter } from 'next/navigation';

const MyProfile = () => {
  const router = useRouter();
  const [posts, setPosts] = useState();

  useEffect( () => { 
    const fetchPosts = async() => {
      const response = await fetch(`/profile/users/user11/posts`);
      const data = await response.json();

      console.log("프로필 data 조회 >> " + JSON.stringify(data));
      setPosts(data);
    }
    fetchPosts();
  }, []);
  const handleEdit = () => {
    console.log("edit " + posts.index);
    router.push(`/update_prompt?index=${posts.index}`)
  }
  const handleDelete = () => {
    
  }
  return (
    <Profile
      name="my"
      desc="프로필 화면"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}>

    </Profile>
  )
}

export default MyProfile