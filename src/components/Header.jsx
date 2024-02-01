import React from 'react'
import Logo from '../assets/14852515_5526266.svg'
import { Link, useNavigate } from 'react-router-dom'
import {
  BiSearch,
  BiSolidOffer,
  BiHelpCircle,
  BiSolidUserAccount,
  BiCart,
} from 'react-icons/bi'

const Header = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/search')
  }

  return (
    <div className="w-full bg-white flex justify-between items-center shadow-lg py-2 px-32 fixed top-0 left-0 z-[1]">
      <Link to="/">
        <div>
          <img src={Logo} height={85} width={85} alt="" />
        </div>
      </Link>
      <div>
        <ul className="flex text-lg cursor-pointer">
          <li
            className="px-5 flex items-center hover:text-orange-500"
            onClick={navigateHandler}
          >
            <BiSearch />
            <span className="px-3">Search</span>
          </li>
          <li className="px-5 flex items-center hover:text-orange-500">
            <BiSolidOffer />
            <span className="px-3">Offers</span>
          </li>
          <li className="px-5 flex items-center hover:text-orange-500">
            <BiHelpCircle />
            <span className="px-3">Help</span>
          </li>
          <li className="px-5 flex items-center hover:text-orange-500">
            <BiSolidUserAccount />
            <span className="px-3">Account</span>
          </li>
          <li className="px-5 flex items-center hover:text-orange-500">
            <BiCart />
            <span className="px-3">Cart</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
