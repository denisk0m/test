import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "@reduxjs/toolkit";
import listReducer from "./reducers/listSlice.ts"
const rootReducer = combineReducers({
    list: listReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
