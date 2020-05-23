import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import AppNavigator from "TodoList/src/navigation/AppNavigator";

export default function App() {
  return <React.Fragment>
    <StatusBar barStyle="light-content"/>
    <AppNavigator />
    </React.Fragment>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
