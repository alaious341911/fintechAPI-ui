import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserAuthObject } from '../interfaces'

interface AuthState {
  userName: string
  userId: string
  accessToken: null | string
  authRole: null | string
}

const initialState: AuthState = {
  /* User */
  userName: '',
  userId: '',
  accessToken: null,
  authRole: ''

  }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthDetails: (state, action: PayloadAction<UserAuthObject>) => {
      state.userName = action.payload.user_name
      state.userId = action.payload.user_id
      state.accessToken = action.payload.token
      state.authRole = action.payload.role
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuthDetails } = authSlice.actions

export default authSlice.reducer
