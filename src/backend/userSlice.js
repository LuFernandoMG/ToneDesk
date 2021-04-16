import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    uid: null,
    email: null,
    collection:[],
    wishlist: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.name = action.payload.name
            state.uid = action.payload.uid
            state.email = action.payload.email
            state.collection = action.payload.collection
            state.wishlist = action.payload.wishlist
        },
        setUserLogOutState: (state) => {
            state.name = null
            state.uid = null
            state.email = null
            state.collection = []
            state.wishlist = []
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectorUserName = (state) => state.user.name;
export default userSlice.reducer;