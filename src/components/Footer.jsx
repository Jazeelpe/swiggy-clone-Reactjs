import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[300px] pl-80 pt-20  bg-gray-900 flex gap-20 justify-center">
      <div className="text-white flex flex-col gap-6">
        <h1 className="font-bold text-lg">Company</h1>
        <h3>About</h3>
        <h3>Careers</h3>
        <h3>Team</h3>
      </div>
      <div className="text-white flex flex-col gap-6">
        <h1 className="font-bold text-lg ">Contact us</h1>
        <h3>Help & Support</h3>
        <h3>Partner with us</h3>
        <h3>Ride with us</h3>
      </div>
    </div>
  )
}

export default Footer
