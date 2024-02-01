import React, { useState, useEffect } from 'react'
import { Search_URL } from '../utils/constants'
import { RxCross2 } from 'react-icons/rx'

const Search = () => {
  const [data, setData] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const fetchSearch = async () => {
    const response = await fetch(Search_URL + searchQuery)
    const json = await response.json()

    setData(json?.data)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSearch()
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [searchQuery])

  return (
    <div className="w-full h-full px-40 py-32 flex justify-center ">
      <div>
        <div className="flex items-center">
          <input
            className={`border ${
              searchQuery === '' ? '' : 'border-r-0'
            } border-gray-800 w-[700px] bg-gray-100 p-2 outline-none placeholder:px-3 `}
            type="text"
            placeholder="Search for food"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery === '' ? null : (
            <button
              className="bg-gray-100 border border-l-0 border-gray-800 p-2"
              onClick={handleClearSearch}
            >
              <RxCross2 size={24} />
            </button>
          )}
        </div>
        <div className="">
          <div className="w-[700px] h-[400px] mt-10 overflow-auto">
            {data?.suggestions?.map((item) => {
              return (
                <div
                  className="flex hover:bg-gray-300 m-3"
                  key={item.cloudinaryId}
                >
                  <div className="w-[50px h-[50px] m-3 ">
                    <img
                      className="object-cover w-full h-full"
                      src={
                        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/' +
                        item.cloudinaryId
                      }
                      alt=""
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-lg">{item.text}</p>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
