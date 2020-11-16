import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SigninScreen } from 'app/screens/SigninScreen'
import { SignupScreen } from 'app/screens/SignupScreen'

// 型チェック用
export type RootStackParamList = {
  SigninScreen: {}
  SignupScreen: {}
}

const Stack = createStackNavigator<RootStackParamList>()

// ログイン用ナビゲーション
export function LoginNav () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SigninScreen">
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}