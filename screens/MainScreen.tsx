import React from 'react'
import { HomeScreen } from 'app/screens/HomeScreen'
import { LoginNav } from 'app/navigators/LoginNav'
import { useSelector } from 'app/store/store'

// ログイン画面とホーム画面を切り替えるためのコンポーネント
export function MainScreen() {
  const user = useSelector(state => state.user)
  // ユーザーが未取得(null)ならログイン画面へ
  if (user === null) {
    return <LoginNav/>
  }
  //ユーザーがログイン中ならホーム画面へ
  return <HomeScreen/>
}
