import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Shimmer = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div>
        <InfinitySpin height="200" width="200" />
      </div>
    </div>
  )
}

export default Shimmer
