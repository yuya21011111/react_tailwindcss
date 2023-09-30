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
            <a className='mr-5 hover:text-blue-400 duration-300' href='#About'>About</a>
            <a className='mr-5 hover:text-blue-400 duration-300' href='#Skills'>Skills</a>
            <a className=' hover:text-blue-400 duration-300' href='#Grallery'>Grallery</a>
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
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vero recusandae accusantium nulla eaque quas libero perferendis ipsum distinctio voluptate.</p>
            <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde, temporibus beatae sit autem molestiae veritatis dolorem soluta, repellendus ducimus cupiditate ab iure porro illo repudiandae! Ratione repudiandae eligendi harum maxime blanditiis optio cupiditate eum mollitia vel quam, consectetur facilis illum est ea fuga beatae. Magni omnis, recusandae, repudiandae exercitationem distinctio consectetur nemo accusamus sequi at nulla laboriosam expedita. Officiis, non ad velit et fuga eaque vel minima est ipsa commodi, nihil exercitationem quibusdam asperiores repellendus natus libero repudiandae autem. Dignissimos dolorem quaerat laudantium eius deleniti mollitia libero delectus quidem omnis assumenda ab, cum eaque. Sed repudiandae magnam at illo.</p>
          </div>
          {/* カードのdivタグ */}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-3'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z"
                        fill="currentColor"
                      />
                      <path d="M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorum ut magni iste ducimus rerum laudantium minus quidem hic eligendi!
                  </p>
                  <a href='#' className='flex mt-3 text-pink-300 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-3'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z"
                        fill="currentColor"
                      />
                      <path d="M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorum ut magni iste ducimus rerum laudantium minus quidem hic eligendi!
                  </p>
                  <a href='#' className='flex mt-3 text-pink-300 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-3'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z"
                        fill="currentColor"
                      />
                      <path d="M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolorum ut magni iste ducimus rerum laudantium minus quidem hic eligendi!
                  </p>
                  <a href='#' className='flex mt-3 text-pink-300 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='text-center'>
          <p className='text-sm font-medium'>©️ 2023 YuBlog.</p>
        </div>
      </section>
    </>
  )
}

export default App
