import React from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

import {
  useSelector,
  AppDispatch,
  
  // Actions
  setUser
} from 'app/store/store'
import firebase from 'app/firebase/firebase'


// ホーム画面の関数コンポーネント
export function HomeScreen() {
  const email = useSelector(state => state.user ? state.user.email : '')
  const dispatch = useDispatch<AppDispatch>()
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{email} がログインしました</Text>
      <Button title='ログアウト' onPress={()=>{
        firebase.auth().signOut()
          .then(()=>{
            dispatch(setUser(null))
          })
          .catch(error => {
            console.log(error)
          }) 
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
})