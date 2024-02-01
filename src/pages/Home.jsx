import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setApiData, setLoading } from '../utils/globalSlice'
import OfferMenu from '../components/OfferMenu'
import ResturantChain from '../components/ResturantChain'
import Shimmer from '../components/Shimmer'
import ResturantList from '../components/ResturantList'
import Footer from '../components/Footer'

const Home = () => {
  const url = useSelector((state) => state.global.url)
  const loading = useSelector((state) => state.global.loading)
  const apiData = useSelector((state) => state.global.apiData)
  const dispatch = useDispatch()

  const fetchApi = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      dispatch(setApiData(data))
      dispatch(setLoading())
    } catch (error) {
      dispatch(setLoading())
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  if (loading) {
    return <Shimmer />
  }

  return (
    <div className="mt-8">
      <OfferMenu
        fetchApi={fetchApi}
        title={'Best offers for you'}
        index={0}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"
        height="h-[300px]"
      />
      <OfferMenu
        fetchApi={fetchApi}
        title={"what's on your mind?"}
        index={1}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
        height="h-[200px]"
      />
      <ResturantChain />
      <ResturantList />
      <Footer />
    </div>
  )
}

export default Home
