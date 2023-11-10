import { color } from "@rneui/base";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      padding: 40
    },
  
    label:{
        color: "#848484"
    },

    input:{
        width: "100%",
        height: 40,
        borderColor: "#848484",
        borderWidth: 1,
        marginTop: "3%",
        marginBottom:"5%",
        padding: 10

    },

    createAccountForgot:{
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: "3%"

    },

    link:{
        color: "#2196F3",
        marginLeft: "10%",
    },

   button:{
    position: "absolute",
    backgroundColor: "#2196F3",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "20%",
    alignItems: "center",
    justifyContent: "center"
    
   },

   buttonText:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"

   },

   buttonCreateAccount:{
    position: "absolute",
    backgroundColor: "#2196F3",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center"

   },

   buttonTextCreateAccount:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
   },

   logo:{
    bottom: "4%",
    alignItems: "center",
   },

   text:{
    fontSize: 28,
    color: "#848484"
   }
    
  });

  export default Styles