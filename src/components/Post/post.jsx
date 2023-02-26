import React from 'react'
import './post.css'
const Post = () => {
    return (
        <div className='post ml-10 flex flex-col items-center justify-start border-2 border-orange-500 pb-3 gap-2 border-solid rounded-xl  justify-start'>

            <div className=' flex flex-row w-full'>
                <div className='w-16 h-16'>
                    <div className='w-10 h-10 mt-3  mx-auto rounded-full overflow-hidden'>
                        <img className='eslint-disable-next-line' src='https://lastfm.freetls.fastly.net/i/u/ar0/bb3843bfab8279d6cb10f58d3d2a3fe4.jpg' alt='profile ' />
                    </div>
                </div>
                <div className='wid pr-3'>
                    <input className='h-10 rounded-full border-2 px-3 border-grey-300 mt-3 w-full  flex-2 my-auto ' placeholder="     Create a thread..."></input>
                </div>

            </div>

            <div className='w-full  px-14 flex flex-wrap gap-2'>
                <button class="border-2 border-orange-500 hover:bg-orange-300 text-grey-700 font-semibold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">Music</button>
                <button class="border-2 border-orange-500 hover:bg-orange-300 text-grey-700 font-semibold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">Politics</button>
                <button class="border-2 border-orange-500 hover:bg-orange-300 text-grey-700 font-semibold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">Technology</button>
                <button class="border-2 border-orange-500 hover:bg-orange-300 text-grey-700 font-semibold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">Science</button>
                <button class="border-2 border-orange-500 hover:bg-orange-300 text-grey-700 font-semibold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">Art</button>
                <button class=" bg-orange-500 hover:bg-orange-300 text-white font-bold text-sm py-1 px-3 rounded-full focus:outline-none focus:shadow-outline " onclick="myFunction()">+</button>


            </div>
            <div className='w-full ml-28'>
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline hover:animate-pulse" onclick="myFunction()">Publish</button>

            </div>


        </div>
    )
}

export default Post