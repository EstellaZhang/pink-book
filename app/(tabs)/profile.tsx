import { Link } from 'expo-router'
import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-myBackground">
      <View className="flex-1 flex-col items-center">

        <View className="flex-row gap-2 items-center justify-center">
          <Text className="text-2xl font-bold">
            Profile
          </Text>
        </View>
        
        <Link href="/sign_in" className="p-4 rounded-large w-full ">
          <Text className="text-center text-lg font-semibold">
            登录
          </Text>
        </Link>
        <Link href="/sign_up" className="p-4 rounded-large w-full ">
          <Text className="text-center text-lg font-semibold">
            注册
          </Text>
        </Link>

        <Pressable className="p-4 rounded-lg w-full">
          <Text className="text-center text-lg font-semibold">
            退出登录
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  )
}

export default profile