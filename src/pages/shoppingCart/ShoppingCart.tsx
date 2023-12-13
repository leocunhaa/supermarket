import { Card } from "@rneui/base";
import React from "react";
import {Text, Image, ScrollView, Pressable} from 'react-native'

const ShoppingCart = ({route}: any) =>{
    const {shoppingCart} = route.params
    return(

        <ScrollView>
            {shoppingCart.map((prod: any, i: number)=>(
                <Card key={i}>
    
                    <Card.Title> {prod.name} </Card.Title>
                    <Card.Image source={{uri: prod.image}}/>

                    <Pressable onPress={()=>{
                    }} 
                    style={({pressed}) =>({
                        backgroundColor: pressed ? '#9a2edb' : '#4b0081',
                        borderRadius: 5,
                        paddingVertical: 10,
                        width: "45%",
                        alignSelf: "center",
                        bottom: "-2%",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15
                    })}>

                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>Ver mais</Text>

                    </Pressable>
    
                </Card>
            ))}
        </ScrollView>
    )
}

export default ShoppingCart;