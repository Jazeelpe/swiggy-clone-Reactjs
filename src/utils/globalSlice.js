import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    url: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0559193&lng=77.6324513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    apiData: {},
    loading:true
  },
  reducers: {
    setApiData: (state, action) => {
      //state.apiData.push(action.payload)
      Object.assign(state.apiData, action.payload)
    },
    setLoading:(state)=>{
      state.loading = false
    }
  },
})

export const { setApiData, setLoading } = globalSlice.actions
export default globalSlice.reducer
