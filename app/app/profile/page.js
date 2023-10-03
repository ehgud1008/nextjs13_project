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
  const handleEdit = (post) => {
    console.log("edit " + post.index);
    router.push(`/update_prompt?index=${post.index}`)
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("삭제하시겠습니까??");
    if(hasConfirmed){
      try {
        const response = await fetch(`/prompt/${post.index}`,{
          method : 'DELETE'
        });
        const filteredPost = posts.filter( (p) => p._id !== post._id);

        setPosts(filteredPost);
      }catch(error){
        console.log(error);
        alert('삭제 실패');
      }
    }
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