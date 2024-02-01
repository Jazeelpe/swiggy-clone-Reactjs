import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineStars } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const ResturantList = () => {
  const apiData = useSelector((state) => state.global.apiData)
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen px-40 pt-8 pb-8 mb-24 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black font-bold text-2xl pl-4">
          Restaurants with online food delivery
        </h1>
        <div></div>
      </div>
      <div className="grid grid-cols-4 gap-2 w-full h-[600px] pt-5">
        {apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (item, index) => {
            const renderlimit = 7
            if (index <= renderlimit) {
              return (
                <div
                  className="w-full h-[200px] rounded-lg cursor-pointer hover:scale-90 duration-200"
                  key={item.info.id}
                  onClick={() => navigate(`/menu/${item.info.id}`)}
                >
                  <div className="w-full h-[150px] relative rounded-lg">
                    <img
                      className="object-cover w-full h-full rounded-lg"
                      src={
                        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                        item?.info?.cloudinaryImageId
                      }
                      alt=""
                    />
                    <div className="h-full w-full bg-black/25 absolute top-0 left-0 rounded-lg"></div>
                    <h3 className="text-xl font-bold text-white absolute left-3 bottom-2">
                      <span>
                        {item?.info?.aggregatedDiscountInfoV3?.header}
                      </span>
                      <span>
                        {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                      </span>
                    </h3>
                  </div>
                  <div className="flex flex-wrap flex-col  mt-2">
                    <h3 className="font-bold text-lg  text-gray-800">
                      {item?.info?.name.substring(0, 25)}
                    </h3>
                    <div className="font-bold text-lg  text-gray-800 flex items-center">
                      <MdOutlineStars className="text-green-800 mr-2" />

                      <h2>{item?.info?.avgRatingString}</h2>
                    </div>
                    <div className="flex flex-wrap text-gray-400 text-sm">
                      {item?.info?.cuisines.map((item, index) => {
                        const limit = 2
                        if (index <= limit) {
                          return <p key={index}>{item},</p>
                        }
                      })}
                    </div>
                    <p className="flex text-sm text-gray-600 mt-1" key={index}>
                      {item?.info?.locality}
                    </p>
                  </div>
                </div>
              )
            }
          }
        )}
      </div>
    </div>
  )
}

export default ResturantList
