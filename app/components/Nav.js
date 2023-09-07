"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import {signOut, signIn} from 'next-auth/react';

const Nav = () => {
    const isLogin = false;
    const [toggleDropdown, setToggleDropdown] = useState(false);
    
    return (
        <nav className='flex-between w-full mb-16pt-3'>
            {/* 프로젝트 로고 >> 클릭 시 / 으로 */}
            <Link href = "/" className='flex gap-2flex-center'>
                <Image src = "/images/logo.png" width={30} height={30} className='p-1 mt-4 mr-2 ml-2' />
                <p className='logo_text text-end mt-4'>NextJs13 Project</p>
            </Link>


            {/* pc 화면 */}
            <div className='sm:flex hidden'>
                {isLogin ? (
                    //로그인 시 >> 글 생성, 로그아웃, 프로필
                    <div className='flex gap-3 md:gap-5 mt-4 mr-2 ml-2'>
                        <Link href="/create_prompt" className='black_btn'>
                            글 생성
                        </Link>
                        <button type="button" 
                            onClick={signOut}
                            className='outline_btn'>
                            로그아웃
                        </button>
                        <Link href="/profile">
                            <Image src="/images/profile.png"
                                width={35} height={35}
                                className='rounded-rull'
                            />
                        </Link>
                    </div>
                    //로그아웃 시 >> 로그인, 프로필
                    ) : (
                        <div className='flex gap-3 md:gap-5 mt-4 mr-2 ml-2'>
                            <button type='button'
                                onClick={signIn}
                                className='outline_btn'>
                                로그인
                            </button>
                        </div>
                    )
                }
            </div>
            {/* 모바일 화면 */}
            <div className='sm:hidden flex relative'>
                {isLogin ? (
                    //프로필이미지 하나
                    //로그인 시 >> 글 생성, 로그아웃, 프로필
                    <div className="flex mt-4 mr-2 ml-2">
                        <Image src="/images/profile.png" width={30} height={30}
                            onClick={ () => setToggleDropdown( (isToggle) => !isToggle) }
                        />
                        { toggleDropdown && (
                            <div className='dropdown'>
                                <Link href="/profile" className='outline_btn'
                                    onClick={ () => setToggleDropdown(false)}>
                                    내 프로필
                                </Link>
                                <Link href="/create_prompt" className='black_btn'>
                                    글 생성
                                </Link>
                                <button type="button" 
                                    onClick={signOut}
                                    className='outline_btn'>
                                    로그아웃
                                </button>
                            </div>
                        )
                        }
                    </div>
                    ) : (
                        //프로필이미지 하나
                        //로그아웃 시 >> 로그인, 프로필
                        <div className="flex mt-4 mr-2 ml-2">
                            <button type='button' onClick={ () => signIn() } className='black_btn'>로그인</button>
                        </div>
                    ) 
                }
            </div>
            


        </nav>
    )
}

export default Nav;