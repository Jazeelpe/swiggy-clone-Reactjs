import React, { useRef, useEffect, useState } from 'react'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { MdOutlineStars } from 'react-icons/md'
import { useSelector } from 'react-redux'

const ResturantChain = () => {
  const offerslider = useRef()
  const apiData = useSelector((state) => state.global.apiData)
  const handleScrollRight = () => {
    offerslider.current.scrollLeft += 400
  }

  const handleScrollLeft = () => {
    offerslider.current.scrollLeft -= 400
  }

  return (
    <div className="w-full px-40 pt-8 mt-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black font-bold text-2xl pl-4">
          Top restaurant chains
        </h1>
        <div>
          <button onClick={handleScrollLeft} className="m-2 text-3xl">
            <BsArrowLeftCircle />
          </button>
          <button onClick={handleScrollRight} className="text-3xl">
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
      <div
        className="whitespace-nowrap h-[370px] overflow-x-scroll scroll-smooth "
        ref={offerslider}
      >
        {apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => {
            return (
              <div
                className="w-[300px] h-[200px]  inline-block m-2 relative hover:scale-90 duration-200"
                key={item.info.id}
              >
                <img
                  className="object-cover w-full h-full cursor-pointer rounded-xl "
                  src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                    item?.info?.cloudinaryImageId
                  }
                  alt=""
                />
                <div className="absolute h-full w-full bg-black/25 rounded-xl top-0 left-0"></div>
                <h3 className="text-xl font-bold text-white absolute left-3 bottom-2">
                  <span>{item?.info?.aggregatedDiscountInfoV3?.header}</span>
                  <span>{item?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
                </h3>
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
                      const limit = 4
                      if (index <= limit) {
                        return <p key={index}>{item},</p>
                      }
                    })}
                  </div>
                  <p className="flex text-sm text-gray-600 mt-1">
                    {item?.info?.locality}
                  </p>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default ResturantChain
