import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MainState {
    isLoggedIn: Boolean
}

const initialState: MainState = {
    isLoggedIn: false
}

export const MainSlice = createSlice({
    name: 'MainSlice',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            return { ...state, isLoggedIn: action.payload }
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setLoggedIn } = MainSlice.actions

export default MainSlice.reducer