import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {Colors} from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:Colors.bg,
        tabBarInactiveTintColor:'#CEEC7B',
        tabBarStyle:{
            backgroundColor:"#A9CD45",
            height:55,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={28} color={color} />)
        }}
      />
      
      <Tabs.Screen
        name="vet"
        options={{
          tabBarLabel: "Vet",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="hospital-box-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />

<Tabs.Screen
        name="shope"
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="shop" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-sharp" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
