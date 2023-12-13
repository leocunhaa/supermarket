import { Card } from "@rneui/base";
import React from "react";
import {ScrollView, Text, View, TouchableOpacity, ToastAndroid, Pressable} from 'react-native'
import StylesHome from "../home/StyleHome";
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";

const products = [

    {name: "Beagle", price: "R$4800,00", quantity: 5, image: "https://blog.polipet.com.br/wp-content/uploads/2023/01/AdobeStock_168506725-445x445.jpeg"},
    {name: "Labrador", price: "R$5000,00", quantity: 9, image: "https://petanjo.com/blog/wp-content/uploads/2021/11/labrador-tudo-sobre-a-raca.jpg"},
    {name: "Poodle", price: "R$3500,00", quantity: 7, image: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2019/02/poodle_cachorro.png?fit=900%2C506&ssl=1"},
    {name: "Chihuahua", price: "R$4800,00", quantity: 3, image: "https://www.petlove.com.br/images/breeds/197823/profile/original/chihuahua_p.jpg?1539807811"},
    {name: "Buldogue", price: "R$5500,00", quantity: 5, image: "https://cobasi.vteximg.com.br/arquivos/ids/728793/english-bulldog-2705136_1920.png?v=637593914461000000"},

]

const Home = ({shoppingCart, setShoppingCart}:any) =>{

    const openToast = (message: string)=>{
        ToastAndroid.show(message, 3000)
    }

    return(
    
        <ScrollView style={StylesHome.card}>
            {
            products.map((product, i)=>{
                return(
                <Card key={i}>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: product.image}}/>
                    
                    {/*<View style={StylesHome.container}>
                        <Text style={{fontSize: 15, marginEnd: "5%"}}> Preço: {product.price} </Text>
                        <Text style={{fontSize: 15, marginEnd: "5%"}}> Quantidade: {product.quantity} </Text>
                    </View>*/}
    
                    {/*<TouchableOpacity onPress={() => {
                        openToast("Item adicionado ao carrinho")
                        setShoppingCart([...shoppingCart, product]) //Os três pontinhos pegam item por item e adiciona ao array
                        }} style={StylesHome.button}>
                        <Text style={StylesHome.buttonText}>Adicionar aos favoritos</Text>
                    </TouchableOpacity>*/}

                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Pressable onPress={() =>{
                        openToast("Item adicionado ao Favorito")
                        setShoppingCart([...shoppingCart, product])
                    }} style={({pressed}: any) =>(
                        {
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
                        }}>Favoritar</Text>

                    </Pressable>

                    <Pressable onPress={()=>{
                        openToast("Ver mais");
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

                    </View>
                    
                </Card>
                )
          })
        }
        </ScrollView>
    )
}

export default Home