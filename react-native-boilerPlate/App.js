import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/Root";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <Root>
      <Navigation />
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
