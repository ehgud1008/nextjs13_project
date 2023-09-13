"use client";

import React, { useEffect, useState } from "react";
import PromptCard from '@components/PromptCard';

const PromptCardList =( {data, handleTagClick} ) => {
    const one = data[0];
    console.log("one = " + one);
    return (
        <div className="mt-16 prompt_layout">
            {/* {data.map((post) => (
                <PromptCard
                    key={post.tag}
                    post={post}
                    // handleTagClick={handleTagClick}
                />
            ))} */}
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
            console.log("@@@ = " + data);
                        
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
            <PromptCardList
                data={[posts]}
                handleTagClick={ () => {}}
            />
        </section>
    )
}

export default Feed;