import { Card, FAB } from "@rneui/base";
import React from "react";
import {ScrollView, Text, View, TouchableOpacity, ToastAndroid, Pressable} from 'react-native'
import StylesHome from "../home/StyleHome";
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import ChatModal from "../../chat/chatModal";
import Toast from 'react-native-toast-message';

const products = [

    {name: "Beagle", price: "R$4800,00", quantity: 5, image: "https://blog.polipet.com.br/wp-content/uploads/2023/01/AdobeStock_168506725-445x445.jpeg"},
    {name: "Labrador", price: "R$5000,00", quantity: 9, image: "https://petanjo.com/blog/wp-content/uploads/2021/11/labrador-tudo-sobre-a-raca.jpg"},
    {name: "Poodle", price: "R$3500,00", quantity: 7, image: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2019/02/poodle_cachorro.png?fit=900%2C506&ssl=1"},
    {name: "Chihuahua", price: "R$4800,00", quantity: 3, image: "https://www.petlove.com.br/images/breeds/197823/profile/original/chihuahua_p.jpg?1539807811"},
    {name: "Buldogue", price: "R$5500,00", quantity: 5, image: "https://cobasi.vteximg.com.br/arquivos/ids/728793/english-bulldog-2705136_1920.png?v=637593914461000000"},


]

const Home = ({ shoppingCart, setShoppingCart}: any) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [starredItems, setStarredItems] = useState<Array<number>>([]);

    const toggleStar = (index: number) => {
        if (starredItems.includes(index)) {
          // Se o item já estiver marcado como favorito, remova-o
          setStarredItems(starredItems.filter(itemIndex => itemIndex !== index));
        } else {
          // Se o item não estiver marcado como favorito, adicione-o
          setStarredItems([...starredItems, index]);
        }
      };
    
    
    const openToast = (message: string)=>{
        ToastAndroid.show(message, 3000)
    }

    const handleFABPress = () => {
        setIsChatOpen(true);
      };
      
    return(
        
        <>
        <ScrollView style={StylesHome.card}>
            {
            products.map((product, i)=>{
                return(
                <Card key={i}>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: product.image}}/>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

                    <Pressable onPress={() =>{
                        openToast("Item adicionado a carrocinha")
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
                        }}>Carrocinha</Text>
                    </Pressable>

                    <Pressable onPress={() =>{
                        openToast("Adotar o cachorro");
                        }} style={({pressed}) =>({
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
                        }}>Adotar</Text>

                    </Pressable>

                    <Pressable onPress={() => toggleStar(i)}>
                        <Icon
                        name={starredItems.includes(i) ? "star" : "staro"}
                        size={30}
                        color={starredItems.includes(i) ? "#FFD700" : "#FFFFF"}
                        style={{ alignSelf: 'flex-end', marginTop: 10 }}
                    />
                    </Pressable>

                    </View>
                    
                </Card>
                )
            })

        }

    

        </ScrollView>

        <FAB style={StylesHome.fab}
        visible={true}
        icon={{ name: 'chat', color: '#FFF' }}
        color='#4b0081'
        onPress={handleFABPress}
        ></FAB>

        {isChatOpen && (
            <ChatModal onClose={() => setIsChatOpen(false)} userName="Usuario" />
        )}
        </>
      
    )
}

export default Home

