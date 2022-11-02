import React from 'react'

function Background({color, sticky}) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div
        className={
          sticky ? 'sticky top-0 left-0 w-full h-screen' : 'w-full h-full'
        }
      >
        <div
          className={`h-full w-full 
          ${color === 'blue' && 'bg-themeblue'}
          ${color === 'offwhite' && 'bg-themeoffwhite'}
          ${color === 'white' && 'bg-white'}
          ${color === 'transparent' && 'bg-black bg-opacity-80'}
          `}
        ></div>
      </div>
    </div>
  )
}

export default Background
