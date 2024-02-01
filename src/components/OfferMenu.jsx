import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'

const OfferMenu = ({ title, index, src, height, fetchApi }) => {
  const apiData = useSelector((state) => state.global.apiData)

  const offerslider = useRef()

  const handleScrollRight = () => {
    offerslider.current.scrollLeft += 400
  }

  const handleScrollLeft = () => {
    offerslider.current.scrollLeft -= 400
  }

  return (
    <div className="w-full px-40 pt-8 relative top-14">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black font-bold text-2xl pl-4">{title}</h1>
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
        className="whitespace-nowrap overflow-x-scroll scroll-smooth"
        ref={offerslider}
      >
        {apiData?.data?.cards[index]?.card?.card?.imageGridCards?.info?.map(
          (item, index) => {
            return (
              <div className={` ${height} inline-block m-2`} key={item.id}>
                <img
                  className="object-cover w-full h-full cursor-pointer "
                  src={src + item.imageId}
                  alt=""
                />
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default OfferMenu
