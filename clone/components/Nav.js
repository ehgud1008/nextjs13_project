"use client"

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, /* getProviders */} from 'next-auth/react';

const Nav = () => {
    const isLogin = true;
    // const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    // useEffect( () => {
    //     const setProviders = async () => {
    //         const response = await getProviders();

    //         setProviders(response);
    //     }

    //     setProviders();
    // }, [])

    return (
        <nav className="flex-between w-full mb-16pt-3 mt-16pt-3 ">
            <Link href="/" className="flex gap-2flex-center">
                <Image src="/images/logo.png" alt="logo" 
                    width={20} height={20} 
                    className="object-contain" />
                <p className="logo_text">NextJs13_Project</p>
            </Link>

            <div className="sm:flex hidden">
                {isLogin ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href = "/create-prompt" className="black_btn">Create Post</Link>
                        <button type="button" onClick={signOut} className="outline_btn">
                            sign out
                        </button>
                        <Link href = "/profile">
                            <Image src="/images/profile.png" alt="profile"
                                width={35} height={35} className="rounded-rull" />
                        </Link>

                    </div>
                ) : (
                    <>
                        {/* {providers && Object.values(providers).map((provider) => { */}
                            (
                                <button type = "button" 
                                    key={provider.name}
                                    onClick={ () => {signIn(provider.id)}}
                                    className="black_btn">Sign In
                                </button>
                            )
                        {/* })} */}
                    </>
                )}
            </div>

            <div className="sm:hidden flex relative">
                {isLogin ? (
                    <div className="flex">
                        <Image src="/images/profile.png" alt="profile"
                            width={35} height={35} className="rounded-rull"
                            onClick={ () => { 
                                setToggleDropdown( (prev) => !prev)
                            }}    
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href="/profile" className="dropdown_link"
                                    onClick={ () => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href="/create-prompt" className="dropdown_link"
                                    onClick={ () => setToggleDropdown(false)}>
                                    Create Prompt
                                </Link>
                                <button type="button" onClick={ () => {
                                    setToggleDropdown(false);
                                    signOut();
                                }} className="mt-5 w-full black_btn">
                                    Sign Out
                                </button>
                            </div>
                        )}

                    </div>
                ) : (
                    <>
                        {/* {providers && Object.values(providers).map((provider) =>  */}
                            (
                                <button type = "button" 
                                    key={provider.name}
                                    onClick={ () => {signIn(provider.id)}}
                                    className="black_btn">Sign In
                                </button>
                            )
                        {/* )} */}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav;