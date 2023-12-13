import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/pages/introducao/Login';
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import Home from "./src/pages/home/Home";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from "react";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const [shoppingCart, setShoppingCart] = useState([])

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={({navigation}) =>{
          return{

            headerBackVisible: false, 
            headerTitleAlign: "center", 
            title: "Home", 
            headerLeft: ()=> (
              <Icon onPress={()=>(navigation.navigate("shoppingCart", {shoppingCart}))} name="heart" size={23}></Icon>
              ), 
              headerRight: ()=> (
                <>
              <Icon onPress={()=>(navigation.navigate("login"))} name="logout" size={23}></Icon>
              </>
            )
          }
        }} name="home">
          {
            () => (
              <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}></Home>
            )
          }
        </Stack.Screen>

        <Stack.Screen options={{headerShown: false}} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{ title: "Favoritos" }} name="shoppingCart" component={ShoppingCart}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );

}


export default App;
