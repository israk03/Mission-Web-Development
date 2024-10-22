/* eslint-disable no-unused-vars */
import React from 'react'

export default function Eventhandle() {

    const handleBtn = () => {
        alert('EVENT HANDLE BUTTON CLICKED.')
    }
  return (
    <div>
        <button className='event-btn' onClick={handleBtn}>EVENT HANDLE BUTTON</button>
    </div>
  )
}
