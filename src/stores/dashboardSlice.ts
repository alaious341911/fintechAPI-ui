import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DashboardPayloadObject } from '../interfaces'

interface DashboardState {
  //pageNumber?: number
  startDate?: null | string
  endDate?: null | string
  
}

const initialState: DashboardState = {
  /* User */
  //pageNumber: 0,
  startDate: null,
  endDate: null,

}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboard: (state, action: PayloadAction<DashboardPayloadObject>) => {
      //state.pageNumber = action.payload.pageNumber
      state.startDate = action.payload.startDate
      state.endDate = action.payload.endDate
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDashboard } = dashboardSlice.actions

export default dashboardSlice.reducer
