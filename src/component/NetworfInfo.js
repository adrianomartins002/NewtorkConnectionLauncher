import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import * as Animatable from 'react-native-animatable';



/**
 * Component to handler a view with information of network
 */
export function NetworkInfo(){
    
    const [networkConnected, setNetworkConnected] = useState(true)
    const animatRef = useRef(null)
    
    bounceOut = ()=> animatRef.current.bounceOut(2000)
    bounceIn = ()=> animatRef.current.bounceIn(2000)

    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            setNetworkConnected(state.isConnected)
            if(state.isConnected){
                bounceIn()
                bounceOut()
            }
            else
                bounceIn()
        });
    
    })
    
    return(
        <Animatable.View ref={animatRef}>
        <View style={networkConnected? style.containerConnected:style.containerDisconnected}>
            <Text style={style.text}>
                {networkConnected?
                "Network connected!":
                "Network disconnected!"}
            </Text>
        </View>
        </Animatable.View>
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