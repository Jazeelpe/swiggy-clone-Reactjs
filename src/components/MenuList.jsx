import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const MenuList = ({ data, number }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuDetails = data?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR

  return (
    <div>
      {/* new component */}
      <div className="flex justify-between " onClick={() => setIsOpen(!isOpen)}>
        <h1 className="font-bold text-[1.3rem]">
          {`${menuDetails?.cards[number]?.card?.card?.title}(${menuDetails?.cards[number]?.card?.card?.itemCards?.length})`}
        </h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen === false ? (
            <RiArrowDropDownLine size={40} />
          ) : (
            <RiArrowDropUpLine size={40} />
          )}
        </button>
      </div>
      {isOpen === false
        ? null
        : menuDetails?.cards[number]?.card?.card?.itemCards?.map(
            (item, index) => {
              return (
                <div key={index} className="mb-15">
                  <div className="flex justify-between mt-8">
                    <div className="flex flex-col gap-1 items-start">
                      <h3 className="font-bold text-[0.95rem]">
                        {item.card.info.name}
                      </h3>
                      <h2 className="font-bold text-[0.89rem]">
                        ₹ {item.card.info.price / 100}
                      </h2>
                      <p className="mt-3 text-sm text-gray-500">
                        {item.card.info.description}
                      </p>
                    </div>
                    <div className="w-36 h-28 rounded-xl relative">
                      <button className="bg-white text-green-600 border border-gray-300 rounded-lg px-[27px] py-[3px] absolute bottom-[-3px] left-7">
                        Add
                      </button>
                      <img
                        className="w-[100%] h-[100%] object-cover rounded-xl"
                        src={
                          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
                          item.card.info.imageId
                        }
                        alt="/"
                      />
                    </div>
                  </div>
                  <hr className="mt-5 mb-5 border border-b border-dashed border-b-[#d3d3d3]" />
                </div>
              )
            }
          )}
    </div>
  )
}

export default MenuList
