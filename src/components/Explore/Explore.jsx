import React from 'react'
import './Explore.css'
const Explore = () => {
    return (
        <div className='notification h-32 bg-orange-400 text-white mb-5 flex flex-col  border-2 border-orange-500 pb-3 gap-2 border-solid rounded-xl '>
            <button className='h-full bg-orange-700 rounded-t-xl hover:bg-orange-700 w-full flex hover:animate-pulse'>
                <div className='text-4xl font-semibold my-auto mx-3'>Explore </div>
                <div className='my-auto mx-5' >See the latest <br /> Discussions from a <br />variety of Interests</div>
            </button>

        </div>
    )
}

export default Explore