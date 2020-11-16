import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import firebase from 'app/firebase/firebase'
import { RootStackParamList } from 'app/navigators/LoginNav'

// propsの型チェック用
type SignupScreenNavProp = StackNavigationProp<
  RootStackParamList,
  'SignupScreen'
> 
type Props = {
  navigation: SignupScreenNavProp
}

// サインアップ画面の関数コンポーネント
export function SignupScreen(props: Props) {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <View style={styles.container}>
      <Text>新規登録</Text>
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
        title="登録"
        onPress={() => {
          // メールアドレスとパスワードでユーザー作成
          firebase.auth().createUserWithEmailAndPassword(
            email,
            password,
          ).then((user) => {
            // 登録成功したらログイン画面に戻る
            props.navigation.pop()
          }).catch((error) => {
            console.log(error)
          })
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