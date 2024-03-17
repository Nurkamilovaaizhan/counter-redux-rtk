const { createSlice, configureStore } = require("@reduxjs/toolkit");
// Initial state 
const initialState = {
    counter: 0,
};
// createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter += 1;
        },
        decrement: (state, action) => {
            state.counter -= 1;
        },
        reset: (state, action) => {
            state.counter = 0;
        },
        incrementByAmount: (state, action) => {
            state.counter += action.payload;
        }
    }
});
// Generate actions
const { decrement, increment, reset, incrementByAmount } = counterSlice.actions;
// Generate reducer
const counterReducer = counterSlice.reducer;
// store
const store = configureStore({
    reducer: counterReducer,
});
// dispatch
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementByAmount())