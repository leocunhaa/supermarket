import { Card } from "@rneui/base";
import React from "react";
import {ScrollView, Text, View, TouchableOpacity} from 'react-native'
import StylesHome from "../home/StyleHome";

const products = [
    {name: "Beagle", price: "R$ 4800,00", quantity: 5, image: "https://blog.polipet.com.br/wp-content/uploads/2023/01/AdobeStock_168506725-445x445.jpeg"},
    {name: "Labrador", price: "R$ 5000,00", quantity: 9, image: "https://petanjo.com/blog/wp-content/uploads/2021/11/labrador-tudo-sobre-a-raca.jpg"},
    {name: "Poodle", price: "R$ 3500,00", quantity: 7, image: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2019/02/poodle_cachorro.png?fit=900%2C506&ssl=1"},
    {name: "Chihuahua", price: "R$ 4800,00", quantity: 3, image: "https://www.petlove.com.br/images/breeds/197823/profile/original/chihuahua_p.jpg?1539807811"},
    {name: "Buldogue", price: "R$ 5500,00", quantity: 5, image: "https://cobasi.vteximg.com.br/arquivos/ids/728793/english-bulldog-2705136_1920.png?v=637593914461000000"},

]

const Home = ({navigation}: any) => { 
    return(

        <ScrollView>
            {
            products.map((product, i)=>(
                <Card>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: product.image}}/>

                    <View style={StylesHome.container}>
                        <Text style={{fontSize: 15, marginEnd: "5%"}}> Preço: {product.price} </Text>
                        <Text style={{fontSize: 15, marginEnd: "5%"}}> Quantidade: {product.quantity} </Text>
                    </View>

                    <TouchableOpacity style={StylesHome.button}>
                        <Text style={StylesHome.buttonText}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </Card>
            ))
        }
        </ScrollView>
    )
}

export default Home