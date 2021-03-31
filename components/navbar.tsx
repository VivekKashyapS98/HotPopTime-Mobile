import { Modak_400Regular, useFonts } from "@expo-google-fonts/dev";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function NavBar() {
  let [fontsLoaded] = useFonts({
    Modak_400Regular,
  });

  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.logo}>HOTPOPTIME</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontFamily: "Modak_400Regular",
    fontSize: 30,
    color: "gold",
    marginHorizontal: 10,
  },
});
