"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const PromptCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState("");
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => {
           setCopied("");
        }, 3000);
    }
  return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <Image src='/images/logo.png'
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900">{post.creator}</h3>
                    <p className="font-inter text-sm text-gray-500">{post.prompt}</p>
                </div>
            </div>

            <div className="copy_btn" onClick={ () => { handleCopy } }>
                {<Image src = {copied === post.prompt ? '/images/logo.png' : '/images/profile.png'}
                    width={15} height={15} alt="copy"/>}
            </div>
        </div>
        <p className="my-4 text-sm text-gray-700">{post.prompt}</p>
        <p className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={ () => { handleTagClick && handleTagClick(post.tag) }}>
            {post.tag}
        </p>
    </div>
  )
}

export default PromptCard