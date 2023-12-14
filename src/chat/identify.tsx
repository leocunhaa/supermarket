import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Identify = ()=>{
    const navigation = useNavigation();
    const [userName, setUserName] = useState('')
    return(

        <View>
            <Text>Digite seu nome</Text>
            <TextInput value={userName} placeholder='seu nome' onChangeText={(text) =>{setUserName(text)}}
            />
        </View>
    )
}

export default Identify