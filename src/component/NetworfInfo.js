import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import NetInfo from "@react-native-community/netinfo";


/**
 * Component to handler a view with information of network
 */
export function NetworkInfo(){
    // let sateNetowrkDescription = 
    const [networkConnected, setNetworkConnected] = useState(true)
    // Subscribe
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            console.warn(state.isConnected)
            setNetworkConnected(state.isConnected)
        });
    
    })
    
    return(
        <View style={networkConnected? style.containerConnected:style.containerDisconnected}>
            <Text style={style.text}>
                {networkConnected?
                "Network connected!":
                "Network disconnected!"}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerConnected:{
        width:"100%",
        height:50,
        backgroundColor:"#345beb",
        justifyContent:"center"
    },
    containerDisconnected:{
        width:"100%",
        height:50,
        backgroundColor:"#cf453e",
        justifyContent:"center"
    },
    text:{
        textAlign:"center",
        color:"#FFF", 
        fontWeight:"bold",
        fontSize:15
    }
})