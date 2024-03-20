import React from 'react'
import Chat from './Chat';
import LineChart from './LineChart';

function Chart() {
    
  return (
    <div className='flex w-full'>
        <div className='w-3/6'>
            <h5 className='text-2xl font-normal uppercase font-sans'>Daily visitor</h5>
            <div>
                <LineChart/>
            </div>
        </div>
        <div>
            <h5 className='text-2xl font-normal uppercase font-sans'>Monthly Visitors</h5>
            <div> 
                <Chat/>               
            </div>
        </div>

    </div>
  )
}

export default Chart