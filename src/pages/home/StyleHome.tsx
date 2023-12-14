import { color } from "@rneui/base";
import { StyleSheet } from "react-native";

const StylesHome = StyleSheet.create({

    text:{
        color: "blue",
        fontSize: 50
    },

    container:{
        flexDirection: "row",
        fontSize: 30,
        alignSelf: "center"

    },

    buttonText:{
        fontSize: 15,
        color: "#FFF",
        fontWeight: "bold"
    },

    button:{
        backgroundColor: "#4b0081",
        borderRadius: 5,
        paddingVertical: 10,
        width: "60%",
        alignSelf: "center",
        bottom: "-2%",
        alignItems: "center",
        justifyContent: "center"
    },

    card:{
        
        backgroundColor: "#4b0081"
    },

    productContainer:{

    },
    productImage:{

    },
    productPrice:{
        
    },
    productName:{

    },
    addButtonText:{


    },
    addButton:{


    },

    fab:{
        position: "absolute",
        bottom: 30,
        right: 30,
    }

})

export default StylesHome
