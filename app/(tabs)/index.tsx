import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Button } from '@react-navigation/elements';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import ListItem from "../../components/ListItem/ListItem";

export default function HomeScreen() {
  const { colors } = useTheme();
  const [text, onChangeText] = React.useState("Areo Okiki");
  const [number, onChangeNumber] = React.useState("");
  const [items, setItems] = React.useState<string[]>([]); // array of submitted texts

  const displayFunction = () => {
    if (text.trim() === "") return; // ignore empty input
    setItems((prev) => [...prev, text]); // add new text to list
    onChangeText(""); // clear input
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <ThemedText>First App Wow!</ThemedText>
        <View style={styles.box}>
          <TextInput
            style={[
              styles.input,
              {
                color: colors.text,
                borderColor: colors.border,
                backgroundColor: colors.background,
              },
            ]}
            value={text}
            onChangeText={onChangeText}
          />
          <View style={styles.btn}>
            <Button title="Submit" onPress={displayFunction} />
          </View>
        </View>
        <View style={styles.listContainer}>
          {items.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </View>
        <View style={styles.phinput}>
          <TextInput
          style={[styles.input, { borderColor: colors.border }]}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          placeholder="+234 6556 667 54"
        />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    flex: 1,
  },
  box: {
    // flex: 1
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 10,
  },
  input: {
    height: 40,
    width: "70%",
    marginRight: 15,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    width: "25%",
  },
  listContainer: {
    // marginTop: 5,
    flexDirection: "column", // vertical layout
    gap: 10, // space between items (RN 0.71+)
    width: "100%",
  },
  phinput:{
    marginTop: 20,
    width: "100%"
  }
  // listItem: {
  //   fontSize: 16,
  // },
});
