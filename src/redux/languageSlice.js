import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'language',
  initialState: 'es',
  reducers: {
    changeLanguage: (state, action) => {
      return action.payload
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
