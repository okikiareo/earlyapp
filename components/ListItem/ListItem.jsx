import React from "react"
import { Button, StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const ListItem = ({item}) =>{
    return(
        <View style={styles.listItem}>
<ThemedText>
    {item} 
</ThemedText>
        </View>
    )
}
export default ListItem;

const styles = StyleSheet.create({
listItem:{
    marginTop: 2,
flexDirection: "column", 
backgroundColor: "#d4d4d4",
padding: 10,
// width: "100%",
}
})