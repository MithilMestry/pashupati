// import { View, Text } from 'react-native'
// import React from 'react'

// export default function home() {
//   return (
//     <View >
//       <Text style={{
//         textAlign:'center',
//         top:50,
//       }}>home</Text>
//     </View>
//   )
// }

// app/home/index.js (Home Tab)
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import OptionOneDetails from "../../components/navigation/OptionOneDetails";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  const navigation = useNavigation(); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen Content</Text>
    </View>
  );
}

function OptionOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Option One</Text>
    </View>
  );
}

function OptionTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Option Two</Text>
    </View>
  );
}

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#A9CD45",
        drawerInactiveTintColor: "#777",
        drawerStyle: {
          backgroundColor: "#f7f7f7",
        },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
        
      />
      <Drawer.Screen
        name="OptionOne"
        component={OptionOneDetails}
        options={{
          drawerLabel: "Option One",
          drawerIcon: ({ color }) => (
            <Ionicons name="list-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="OptionTwo"
        component={OptionTwo}
        options={{
          drawerLabel: "Option Two",
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
