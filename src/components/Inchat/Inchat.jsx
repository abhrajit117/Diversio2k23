import React from 'react'
import './Inchat.css'
import { ImCross } from 'react-icons/im'
import { RiSendPlaneFill } from 'react-icons/ri'
const Inchat = () => {
    return (
        <div className='post inchat ml-10 flex flex-col items-center justify-start border-2 border-orange-500 gap-2 border-solid rounded-xl  justify-start'>

            <div className='flex flex-row relative w-full'>
                <div></div>
                <div className='text-2xl font-semibold mt-2 top-2 m-auto'>Chats</div>
                <div className='absolute right-4 top-4'><button><ImCross /></button></div>
            </div>
            <div className='w-full h-0.5  bg-gray-300 '></div>
            <div className='namesection relative w-full h-full'>
                <div className=' pt-2 bg-orange-400 relative'>
                    <div className='w-8 h-8 absolute left-2 rounded-full overflow-hidden'>
                        <img className='' src='https://lastfm.freetls.fastly.net/i/u/ar0/bb3843bfab8279d6cb10f58d3d2a3fe4.jpg' alt='profile ' />
                    </div>
                    <div className='ml-12 text-xl font-semibold'>Arman Malik</div>
                    <div className='w-full h-0.5 bg-gray-300 mt-3'></div>
                </div>
















                <div id='chatarea flex flex-row '>

                    <div>
                        <div className='mx-2 my-1 bg-gray-200 inline-block rounded-lg overflow-hidden '>
                            <div className='text-xs bg-gray-300 p-1'>Arman Malik</div>
                            <div className='px-2 pb-1'>Hi bro how are you?</div>
                        </div>
                    </div>

                    <div>
                        <div className='mx-2 my-1 bg-gray-200 inline-block rounded-lg overflow-hidden '>
                            <div className='text-xs bg-gray-300 p-1'>Arijit Singh</div>
                            <div className='px-2 pb-1'>All good .. what about you?</div>
                        </div>
                    </div>




                </div>














                <div className='absolute  bottom-0 w-full bg-orange-300 rounded-xl '>
                    <input className='w-full h-12 rounded-xl p-5 bg-gray-200 ' placeholder='Type your message'></input>
                    <button className='absolute bottom-1 h-10 rounded-lg w-10 right-1 bg-gray-400 flex items-center '><RiSendPlaneFill className='m-auto h-6 w-6' /></button>
                </div>
            </div>

        </div>
    )
}

export default Inchat