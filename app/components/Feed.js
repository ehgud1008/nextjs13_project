"use client";

import React, { useEffect, useState } from 'react'
import PromptCard from '@components/PromptCard';
const Feed = () => {
    const [searchText, setSearchText] = useState(''); 
    const handleSearchChange = (e) => {

    }

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const fetchPosts = async () => {
            const response = await fetch('/prompt');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchPosts();
    }, []);
  return (
    <section>
        <form className="relative w-full flex-center">
            <input type ="text"
                placeholder='태그 및 유저 검색'
                value = {searchText}
                onChange={handleSearchChange}
                required
                className='search_input peer'
            />
        </form>
        <div className='mt-16 prompt_layout'>
            {posts.map((post) => (
                <PromptCard
                    key={post.index}
                    post={post}
                    handleTagClick={ () => {} }
                />
            ))}
        </div>
    </section>
  )
}

export default Feed