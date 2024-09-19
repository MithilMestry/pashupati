import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'regular':require('./../assets/fonts/Oxygen-Regular.ttf'),
    'bold':require('./../assets/fonts/Oxygen-Bold.ttf'),
    'light':require('./../assets/fonts/Oxygen-Light.ttf'),
  })

  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
