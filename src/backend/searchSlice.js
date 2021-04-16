import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    results: null,
    type: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setResults: (status, action) => {
            status.results = action.payload.results
        },
        setType: (status, action) => {
            status.type = action.payload.results
        }
    }
});

export const { setResults } = searchSlice.actions;
export const selectorResults = (state) => state.results
export const selectorType = (state) => state.type
export default searchSlice.reducer;