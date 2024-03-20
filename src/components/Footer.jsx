import React from 'react'

function Footer() {
  return (
    <div className='flex w-full justify-between'>
        <div className='w-3/6 text-gray-400 text-xs'>Copyright @ 2022 Socialstat Inc.</div>
        <div className=''>
            <a href="#" className='text-red-500 pr-2 underline'>Term</a>
            <a href="#" className='text-red-500 underline'>Condition</a>
        </div>
    </div>
  )
}

export default Footer