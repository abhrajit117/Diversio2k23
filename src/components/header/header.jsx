import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className='header h-14 mb-5 flex gap-5'>

            <div className='picture h-8 w-48 z-10 fill-gray-800 mt-1.5 ml-5 '>
                <div className='text-4xl font-bold flex-1 '>
                    connect
                </div>
            </div>
            <div className='relative font-semibold w-full'>
                <div className='absolute top-5 right-6'>Logout</div>
                <div className='absolute font-semibold top-5 right-32'>Login as Username</div>
                <div className='absolute  top-3 right-72 '>
                    <label class="toggle">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>



            {/* <div className='flex-4 flex flex-row'>
                <div className='basis-2 m-auto mx-3 '>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className='flex-1 m-auto mx-3'>

                </div>
                <div className='flex-1 m-auto mx-5 mr-16 '>
                    <label class="toggle">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
            </div> */}
        </div>
    )
}

export default Header
