//stateless component from react native
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const size = 50;

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 1, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  text: {
    fontSize: 18,
  },
});

const FAB = (props) => {
  const { fabStyle, textStyle, text, ...otherProps } = props; // otherProps are the otherprops coming from props
  return (
    <TouchableOpacity style={[styles.container, fabStyle]} {...otherProps}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FAB;
