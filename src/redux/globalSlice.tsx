import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
    unauthorized : boolean,
    alreadySignedIn: boolean
}

const initialState: GlobalState = {
  unauthorized:false,
  alreadySignedIn : false
}


export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers:{
    setUnAuthorized : (state, action: PayloadAction<boolean>)=>{
        state.unauthorized = action.payload
    },
    setAlreadySigned : (state, action: PayloadAction<boolean>)=>{
      state.alreadySignedIn = action.payload
  }
  }
})

// Action creators are generated for each case reducer function
export const { 
    setUnAuthorized,
    setAlreadySigned
   } = globalSlice.actions

export default globalSlice.reducer