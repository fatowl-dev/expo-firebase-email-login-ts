import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import {
  AppDispatch,

  // Actions
  setUser,
} from 'app/store/store'
import firebase from 'app/firebase/firebase'
import { RootStackParamList } from 'app/navigators/LoginNav'

// propsの型チェック用
type SignupScreenNavProp = StackNavigationProp<
  RootStackParamList,
  'SigninScreen'
> 
type Props = {
  navigation: SignupScreenNavProp
}

// サインイン画面の関数コンポーネント
export function SigninScreen(props: Props) {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()

  return (
    <View style={styles.container}>
      <Text>ログイン</Text>
      <TextInput 
        style={styles.textinput}
        placeholder="メールアドレス"
        value={email}
        onChangeText={text => { setEmail(text) }}
      />
      <TextInput 
        style={styles.textinput}
        placeholder="パスワード"
        value={password}
        onChangeText={text => { setPassword(text) }}
        secureTextEntry
      />
      <Button
        title="ログインする"
        onPress={() => {
          // ログイン処理
          firebase.auth().signInWithEmailAndPassword(
            email,
            password,
          ).then((user) => {
            // userがnullかもしれない対策(firebaseモジュールの仕様？)
            if (!user) throw new Error("user is empty")
            if (!user.user) throw new Error("user.user is empty")
            if (!user.user.email) throw new Error("user.user.email is empty")
            // ログイン成功したらUserをset
            dispatch(setUser({email: user.user.email}))
          }).catch((error) => {
            console.log(error)
          })
        }}
      />
      <Button
        title="新規登録"
        onPress={() => {
          props.navigation.push('SignupScreen', {})
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  textinput: {
    backgroundColor: 'white',
    height: 30,
    width: 200,
  }
})