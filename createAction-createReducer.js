const { createAction, nanoid, createReducer, bindActionCreators, configureStore } = require('@reduxjs/toolkit');
const logger = require('redux-logger').createLogger();
// Initial state
const initialState = {
    counter: 0,
}
// Create Action
const increment = createAction('INCREMENT')
// const incrementAction = () => {
//     return {
//         type: INCREMENT,
//     },
// }
const decrement = createAction('DECREMENT')
const resetCounter = createAction('RESENTCOUNER')
// Customise createAction
const incrementBy = createAction('INCREMENTBY', (amount, user) => {
    return {
        payload: {
            amount,
            user,
            ud: nanoid()
        }
    }
})
console.log(increment(20, "Dean"));
// Create Reducer

// 2. map object notation
const counterSlice2 = createAction(initialState, {
    [increment]: (state) => {
        state.counter += 1;
    },
    [decrement]: (state) => {
        state.counter -+ 1;
    },
    [reset]: (state) => {
        state.counter = 0;
    },
    [incrementBy]:(state, action) => {
        state.counter += action.payload.amount
    }
});
// 1. Builder callback notation
const counterSlice = createReducer(initialState, (builder) => {
    // increment
    builder.addCase(increment, (state) => {
        state.counter += 1;
    });
    // decrement
    builder.addCase(decrement, (state) => {
        state.counter -= 1;
    });
    // reset 
    builder.addCase(resetCounter, (state) => {
        state.counter = 0;
    });
    // incrementBy
    builder.addCase(incrementBy, (state, action) => {
        state.counter += action.payload.amount
    })
});
// const counerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 count: state.count + 1,
//             };
//             case INCREMENT_BY_AMT:
//                 return {
//                     count: state.count + action.payload,
//                 };
//                 default:
//                     return state
//     }

// }

const store = configureStore({
    reducer: counterSlice2,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// dispatch action
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementBy(100))
console.log(store.getState());

