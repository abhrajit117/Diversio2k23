import React from 'react'
import './profile.css'
const Profile = () => {
    return (
        <>
            <div className='profile h-80  rounded-xl '>
                <div className=' profile flex flex-col items-center border-2 border-orange-500 pb-3 gap-2 border-solid rounded-xl  justify-start '>
                    <div className='text-2xl font-semibold mt-2'>Profile</div>
                    <div className='w-24 h-24 rounded-full overflow-hidden'>
                        <img className='eslint-disable-next-line' src='https://lastfm.freetls.fastly.net/i/u/ar0/bb3843bfab8279d6cb10f58d3d2a3fe4.jpg' alt='profile ' />
                    </div>
                    <div className='font-medium text-xl'>Arijit Singh</div>

                    <button className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full ">
                        Edit Profile
                    </button>
                    <div className='flex flex-col gap-5' >
                        <div>
                            <div className=' font-medium '>
                                Range
                            </div>
                            <div className='text-xs'>(upto which you can find peoples)</div>
                        </div>
                        <div class="mt3">
                            <input type="range" min="0" max="100" value="50" class="appearance-none w-full h-2 bg-gray-300 rounded-lg outline-none " />
                        </div>
                        <div className='distance text-xs font-semibold m-auto'> 0 km &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            ∞ km</div>

                        <div className="flex items-center ">
                            <input id="radio1" type="radio" class="form-radio h-4 w-4 text-orange-500" name="radio-group" value="radio1" />
                            <label for="radio1" className="ml-2 text-gray-700 font-medium">Be Anonymous</label>
                        </div>
                    </div>



                </div>
                <div>

                </div>

            </div>

        </>
    )
}

export default Profile