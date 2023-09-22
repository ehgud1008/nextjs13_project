"use client";

import React, { useEffect, useState } from "react";
import PromptCard from '@components/PromptCard';


//페이지 새로 고침 시 제일 먼저 실행돼서 비어있는 data를 map 할 시 key unique 에러 발생
// >> Feed 에서 데이터 출력
// data가 없는데 뒤에 저 부분을 렌더링 하려고 해서 그렇다.
//1. 렌더링하고 2. useEffect가 실행되고 데이터를 가져오고 3. 가져온 데이터를 이용해서 다시 렌더링 한다. 
//그러니 1번에서 현재 에러가 난 상태이기 때문에 data?.map 으로 하면 된다.
const PromptCardList =( {data, handleTagClick} ) => {
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