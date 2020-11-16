import React from 'react'
import { Provider } from 'react-redux'
import { MainScreen } from 'app/screens/MainScreen'
import { store } from 'app/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen/>
    </Provider>
  )
}
