import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Nav = () => {
    const isLogin = true;
    return (
        <nav className='flex-between w-full mb-16pt-3'>
            {/* 프로젝트 로고 >> 클릭 시 / 으로 */}
            <Link href = "/" className='flex gap-2flex-center'>
                <Image src = "/images/logo.png" width={30} height={30} className='p-1 mt-4 mr-2 ml-2' />
                <p className='logo_text text-end mt-4'>NextJs13 Project</p>
            </Link>


            {/* pc 화면 */}
            <div className='sm:flex hidden'>
                {/* 로그인 시 >> 글 생성, 로그아웃, 프로필*/}
                <div className='flex gap-3 md:gap-5'>
                    <Link>
                    
                    </Link>
                </div>
                {/* 로그아웃 시 >> 로그인, 프로필*/}
            </div>
            <Link href ="profile" className='flex gap-2flex-center' >
                <Image src="/images/profile.png" width={30} height={30}
                    className='mt-4 mr-2 ml-2'
                />
                
            </Link>


        </nav>
    )
}

export default Nav;