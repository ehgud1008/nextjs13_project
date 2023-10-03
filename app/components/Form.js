import Link from 'next/link'
import React from 'react'

const Form = ({post, setPost, submit, handleSubmit, name}) => {
    console.log("FORM >>> " + JSON.stringify(post));
  return (
    <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
            <span className="blue_gradient">프롬프트 생성</span>
        </h1>
        <p className="desc text-left max-w-md">
            프롬프트를 {name}하는 페이지입니다.
        </p>
        <form onSubmit={handleSubmit}
            className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
            <label>
                <span className="font-semibold text-base text-gray-700">
                    프롬프트
                </span>
                <textarea value = {post.prompt || ''}
                        onChange={ (e) => setPost({...post, prompt:e.target.value})}
                        placeholder="Write your prompt here...."
                        className="form_textarea" />

            </label>  
            <label>
                <span className="font-semibold text-base text-gray-700">
                    태그 submit
                    <span className="font-normal"> (#webdevelope #javascript, ...)</span>
                </span>
                <input value={post.tag  || ''}
                        onChange={ (e) => setPost({...post, tag:e.target.value})}
                        placeholder="Write your tag here...."
                        className="form_input"
                        required/>
                    
            </label>
            <div className="flex-end mx-3 mb-5 gap-4">
                <button type="submit"
                        disabled={submit}
                        className="bg-blue-700 px-5 py-1.5 text-sm rounded-full text-white">
                    생성
                </button>
                <Link href ="/" className="text-gray-500 text-sm">
                    취소
                </Link>
            </div>
        </form>
    </section>
  )
}

export default Form