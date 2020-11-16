import {
  createSlice,
  configureStore,
  PayloadAction,
} from '@reduxjs/toolkit'

import { createSelectorHook } from 'react-redux'

import { User, AppState } from 'app/types'

// 初期状態
const initialState : AppState = {
  user: null 
}

// ReducerとActionを作成
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser : (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
  }
})

// ストアを作成
export const store = configureStore({
  reducer: appSlice.reducer
})

// 型チェック付userSelector
export const useSelector = createSelectorHook<AppState>()
// useDispatchに指定する型
export type AppDispatch = typeof store.dispatch

// Actions 
export const { setUser } = appSlice.actions
