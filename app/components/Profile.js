import React from 'react'
import PromptCard from './PromptCard';

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
    console.log("프로필 data >> " + data);
  return (
    <section>
        <h1 className="head_text text-center">
            <span className="blue_gradient">{name}Profile</span>
        </h1>
        <p className="desc text-center">{desc}</p>
        <div className="mt-10 prompt_layout">
            {data?.map((post) => (
                <PromptCard
                    key={post.index}
                    post={post}
                    handleEdit={ () => handleEdit && handleEdit(post) }
                    handleDelete={ () => handleDelete && handleDelete(post)}
                />
            ))}
        </div>
    </section>
  )
}

export default Profile