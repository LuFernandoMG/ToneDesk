import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: '',
    loading: false,
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.error = ''
            state.loading = true
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
});

export const { setLoading, setError } = statusSlice.actions
export default statusSlice.reducer