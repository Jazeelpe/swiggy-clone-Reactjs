import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { Menu_URL } from '../utils/constants'
import MenuList from '../components/MenuList'
import Shimmer from '../components/Shimmer'

const Menu = () => {
  const [loading, setLoading] = useState(true)

  const { resId } = useParams()
  const [menuData, setMenuData] = useState({})

  const fetchMenuData = async () => {
    try {
      const response = await fetch(Menu_URL + resId)
      const json = await response.json()
      setMenuData(json)
      setLoading(!loading)
    } catch (error) {
      setLoading(!loading)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMenuData()
  }, [])

  if (loading === true) {
    return <Shimmer />
  }

  return (
    <div className="w-full  mt-[10rem]  px-[18rem]  ">
      <div>
        <div className="flex justify-between items-center">
          {/* restru name */}
          <div>
            <h1 className="font-bold text-lg mb-2">
              {menuData?.data?.cards[0]?.card?.card?.info?.name}
            </h1>
            <p className="text-sm text-gray-500 mb-1">
              {`${menuData?.data?.cards[0]?.card?.card?.info?.cuisines[0]},
                ${menuData?.data?.cards[0]?.card?.card?.info?.cuisines[1]}
              `}
            </p>
            <p className="text-sm text-gray-500">
              {menuData?.data?.cards[0]?.card?.card?.info?.areaName}
            </p>
          </div>
          <div>
            {/*card */}
            <div className="w-20 h-20 border flex flex-col items-center rounded-xl">
              <div>
                <p className="flex gap-1 items-center py-3">
                  <AiFillStar className="text-green-700" />
                  <span className="text-sm">
                    {
                      menuData?.data?.cards[0]?.card?.card?.info
                        ?.avgRatingString
                    }
                  </span>
                </p>
              </div>
              <div className="w-14 h-[1px] bg-gray-200"></div>
              <div className="text-[12px] py-1">10k+ ratings</div>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5 border border-b border-dashed border-b-[#d3d3d3]" />
        {/* offer & delivery */}
        <div className="flex flex-col">
          {/*    
          <div className="flex">
            <p>29 mins</p>
            <p>150 for two</p>
          </div>
          */}
          <div className="flex gap-2 justify-between m-6 text-[#686b78] whitespace-nowrap overflow-hidden">
            {menuData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
              (item, index) => {
                return (
                  <div className="border p-2 rounded-lg w-26" key={index}>
                    <p className="text-center font-bold text-[1rem]">
                      {item.info.header}
                    </p>
                    <p className="text-sm font-sm">
                      {`${item.info.couponCode} | ${item.info.description}`}
                    </p>
                  </div>
                )
              }
            )}
          </div>
          <hr className="mt-5 mb-5 border border-b border-dashed border-b-[#d3d3d3]" />
          <div>
            {menuData?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.map(
              (item, index) => {
                if (index === 0 || index === 15 || index === 14) {
                  return null
                }

                return (
                  <div className="mt-12" key={index}>
                    <MenuList data={menuData} number={index} />
                    <div className="h-2 bg-gray-300 mt-5"></div>
                  </div>
                )
              }
            )}
          </div>

          {/*<MenuList data={menuData} number={2} />*/}
        </div>
      </div>
    </div>
  )
}

export default Menu
