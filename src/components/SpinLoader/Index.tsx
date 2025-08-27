

import React from 'react'
interface SpinLoaderProps {
  className?: string
}
function SpinLoader(props: SpinLoaderProps) {
  return (
    <div className={`flex justify-center items-center ${props.className}`}>

        <div className='h-10 w-10 border-5 border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default SpinLoader