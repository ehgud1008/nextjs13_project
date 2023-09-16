"use client";

import React, { useEffect, useState } from "react";
import PromptCard from '@components/PromptCard';


//페이지 새로 고침 시 제일 먼저 실행돼서 비어있는 data를 map 할 시 key unique 에러 발생
// >> Feed 에서 데이터 출력
const PromptCardList =( {data, handleTagClick} ) => {
    const one = data[0];
    console.log("one = " + one);
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post.index}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}
const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);
    const handleSearchChange = (e) =>{
        
    }
    useEffect( () => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();
                        
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input type ="text" 
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>
            <div className="mt-16 prompt_layout">
            {posts.map((post) => (
                <PromptCard
                    key={post.index}
                    post={post}
                    handleTagClick={ () => {} }
                />
            ))}
            </div>
            {/* <PromptCardList
                data={[posts]}
                handleTagClick={ () => {}}
            /> */}
        </section>
    )
}

export default Feed;