import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/pages/introducao/Login';
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import Home from "./src/pages/home/Home";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import Icon from 'react-native-vector-icons/AntDesign'

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{title: "Criar Usuario"}} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title: "Recuperar Senha"}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Ofertas", 
        headerBackVisible: false, 
        headerTitleAlign: "center", 
        headerRight: ()=> (<Icon name="logout" size={23}></Icon>), 
        headerLeft: ()=> (<Icon name="shoppingcart" size={23}></Icon>)}} 
        name="home" 
        component={Home}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );

}


export default App;
