"use client";

import React, { useState } from "react";
import Image from 'next/image';

const PromptCard = ( {post, handleTagClick, handleEdit, handleDelete}) => {
    const [copied, setCopied] = useState("");
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image src={post}
                            alt="user_image"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900">{post}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.prompt}</p>
                    </div>
                </div>

                <div className="copy_btn" onClick={ () => {} }>
                    <Image src = {copied === post.prompt ? '/images/logo.png' : '/images/profile.png'}
                        width={15} height={15} alt="copy"/>
                </div>
            </div>
        </div>
    )
}

export default PromptCard;