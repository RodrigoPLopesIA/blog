import React from 'react'


interface ContentProps {
  children?: React.ReactNode;
}
function Content({children}: ContentProps) {
  return (
    <div className="max-w-screen-lg mx-auto px-4 text-justify ">
        {children}
    </div>
  )
}

export default Content