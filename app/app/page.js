import Feed from '@components/Feed'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className='head_text text-center'>
        프로젝트
        <br/>
        <span className='flex-center'>NextJS13 & React</span>
      </h1>
      <p>프로젝트임</p>
      <Feed></Feed>
    </section>
  )
}
