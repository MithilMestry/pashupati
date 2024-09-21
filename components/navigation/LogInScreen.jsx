import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import  {useWarmUpBrowser} from "./../../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LogInScreen() {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth({strategy:"oauth_google"});

    const onPress = React.useCallback(async()=>{
        try{
            const {createdSessionId, signIn, signUp ,setActive}= await startOAuthFlow();

            if (createdSessionId){
                setActive({session:createdSessionId});
            }else{

            }
        }catch(err){
            console.log("OAuth error", err);
        }
    },[]);
  return (
    <View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
      }} >
        <Image source={require('./../../assets/images/pet-management.jpg')} style={{
            height:140,
            width:140,
            margin:25
        }} />
        <View>
        <Text style={{
            fontWeight:'bold',
            fontSize:18,
        }}>
           PET MANAGEMENT
        </Text>
        </View>

        {/* <Text>
            Track your pet's habits and many more...
        </Text> */}
        
      </View>

            <TouchableOpacity style={{
                padding:20,
                backgroundColor:Colors.primary,
                borderRadius:30,
                width:180,
                margin:'auto'
            }} onPress={onPress}>
                <Text style={{
                    textAlign:'center',
                }}>
                    Let's Get Started
                </Text>
            </TouchableOpacity>

    </View>
  )
}