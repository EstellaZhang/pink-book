import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'

const sign_up = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [loading,setLoading] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-myBackground">
      <View className="flex-1 flex-col mx-2" >

        <Text className="text-2xl font-bold text-myGreen text-center mt-20">注册</Text>

        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          className="border border-myGreen rounded-md p-2 mt-6 h-12"
        />

        <TextInput 
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          className="border border-myGreen rounded-md p-2 mt-6 h-12"
        />

        <TextInput 
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          className="border border-myGreen rounded-md p-2 mt-6 h-12"
          secureTextEntry={true}
        />
 
        <Pressable
          className="bg-myGreen rounded-md p-2 mt-6 h-12 flex items-center justify-center"
        >
          <Text className="text-white text-center font-semibold text-lg">{loading?'注册中...':'注册'}</Text>
        </Pressable>

        <View className="flex-row justify-center mt-4">
          <Text className="">已有账号？</Text>
          <Link href="/sign_in" className="text-myGreen font-semibold">登录</Link>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default sign_up