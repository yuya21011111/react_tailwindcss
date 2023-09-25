import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className='text-gray-500 text-xl border-b-2 border-indigo-500'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a className='font-medium text-gray-900' href='#'>
            <span className='text-2xl ml-3'>ShinCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home'>Home</a>
            <a href='#About'>About</a>
            <a href='#Skills'>Skills</a>
            <a href='#Grallery'>Grallery</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default App
