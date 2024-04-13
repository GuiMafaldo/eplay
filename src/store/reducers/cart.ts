import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Games } from '../../pages/Home'

type CartState = {
  items: Games[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Games>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
