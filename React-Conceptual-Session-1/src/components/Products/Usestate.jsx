/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Usestate() {

    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
  return (
    <>
        <div className='usestate-container'>
            <h3>COUNT: {count}</h3>
            <button className='event-btn' onClick={handleCount}>Add Count</button>
        </div>
    </>
    
  )
}
