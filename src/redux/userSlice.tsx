import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../@types/user'

export interface userState {
    user:null | UserType
}

const initialState: userState = {
  user: null
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    login : (state, action: PayloadAction<UserType>)=>{
        state.user = action.payload
    },
    logout:(state)=>{
        state.user = null;
        sessionStorage.removeItem("user");
        localStorage.removeItem("user");
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
    login,
    logout
   } = userSlice.actions

export default userSlice.reducer