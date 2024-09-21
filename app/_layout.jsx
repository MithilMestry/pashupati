import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { Stack } from "expo-router";
import { Text } from "react-native";
import LogInScreen from "./../components/navigation/LogInScreen"
import * as SecureStore from "expo-secure-store";

const tokenCache={
  async getToken(key){
    try{
      return SecureStore.getItemAsync(key);
    }catch(err){
      return null;
    }
  },
  async saveToken(key,value){
    try{
      return SecureStore.setItemAsync(key,value);
    }catch(err){
      return;
    }
  },
};

export default function RootLayout() {

  useFonts({
    'regular':require('./../assets/fonts/Oxygen-Regular.ttf'),
    'bold':require('./../assets/fonts/Oxygen-Bold.ttf'),
    'light':require('./../assets/fonts/Oxygen-Light.ttf'),
  })

  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
    <Stack screenOptions={{
      headerShown:false
    }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
      </SignedIn>

      <SignedOut>
       <LogInScreen/>
      </SignedOut>
    </ClerkProvider>
  );
}
