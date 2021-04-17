import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addToCollection, addToWishlist, removeFromCollection, removeFromWishlist, updateUser } from './firebaseMethods';
import { getResults } from './discogsMethods';

export const getResultsInfo = createAsyncThunk(
    'status/getResultsInfo', async (arr) => {
        const response = await getResults(arr)
        return response
    }
)

export const setAddToCollection = createAsyncThunk(
    'status/setAddToCollection', async (arr) => {
        const response = await addToCollection(arr)
        return response
    }
)

export const setAddToWishlist = createAsyncThunk(
    'status/setAddToWishlist', async (arr) => {
        const response = await addToWishlist(arr)
        return response
    }
)

export const setRemoveFromCollection = createAsyncThunk(
    'status/setRemoveFromCollection', async (arr) => {
        const response = await removeFromCollection(arr)
        return response
    }
)

export const setRemoveFromWishlist = createAsyncThunk(
    'status/setRemoveFromWishlist', async (arr) => {
        const response = await removeFromWishlist(arr)
        return response
    }
)

export const getUpdatedUser = createAsyncThunk(
    'status/getUpdatedUser', async (e) => {
        const response = await updateUser(e);
        return response
    }
)

const initialState = {
    results: [],
    error: undefined,
    loading: false,
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatusLogout: (state) => {
            state.results = []
            state.error = undefined
            state.loading = false
        }
    },
    extraReducers: {
        [getResultsInfo.pending]: (state) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [getResultsInfo.fulfilled]: (state, action) => {
            if (state.loading === true) {
                state.results = action.payload;
                state.loading = false;
            }
        },
        [getResultsInfo.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        },
        [setAddToCollection.pending]: (state) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [setAddToCollection.fulfilled]: (state) => {
            if (state.loading === true) {
                state.loading = false;
            }
        },
        [setAddToCollection.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        },
        [setAddToWishlist.pending]: (state) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [setAddToWishlist.fulfilled]: (state) => {
            if (state.loading === true) {
                state.loading = false;
            }
        },
        [setAddToWishlist.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        },
        [setRemoveFromCollection.pending]: (state,) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [setRemoveFromCollection.fulfilled]: (state) => {
            if (state.loading === true) {
                state.loading = false;
            }
        },
        [setRemoveFromCollection.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        },
        [setRemoveFromWishlist.pending]: (state) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [setRemoveFromWishlist.fulfilled]: (state) => {
            if (state.loading === true) {
                state.loading = false;
            }
        },
        [setRemoveFromWishlist.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        },
        [getUpdatedUser.pending]: (state) => {
            if (state.loading === false) {
                state.loading = true
            }
        },
        [getUpdatedUser.fulfilled]: (state) => {
            if (state.loading === true) {
                state.loading = false;
            }
        },
        [getUpdatedUser.rejected]: (state, action) => {
            if (state.loading === true) {
                state.loading = false;
                state.error = action.payload
            }
        }
    }
});

export const { setStatusLogout } = statusSlice.actions
export default statusSlice.reducer