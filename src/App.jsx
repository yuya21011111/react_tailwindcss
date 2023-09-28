import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className='text-gray-500 text-xl border-b-2 border-indigo-500'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a className='font-medium text-gray-900 mb-4 md:mb-0' href='#'>
            <span className='text-2xl ml-3'>ShinCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a className='mr-5 hover:text-blue-400 duration-300' href='#home'>Home</a>
            <a className='mr-5 hover:text-blue-400 duration-300'  href='#About'>About</a>
            <a className='mr-5 hover:text-blue-400 duration-300'  href='#Skills'>Skills</a>
            <a className=' hover:text-blue-400 duration-300'  href='#Grallery'>Grallery</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-4 flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 mb-8 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
              こんにちは！<br />
              私のポートフォリオサイトにようこそ！<br />
              ごゆっくりくつろぎください
            </h1>
            <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eveniet fuga similique aperiam doloremque iure neque nemo ullam voluptatum nisi delectus laudantium, rerum corrupti possimus quasi sit illo nobis earum!</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src='./images/sample.png' alt=''></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
