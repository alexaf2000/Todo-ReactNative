import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Let's import the screens
import MainScreen from "TodoList/src/screens/main";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007bef",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "TodoList" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
