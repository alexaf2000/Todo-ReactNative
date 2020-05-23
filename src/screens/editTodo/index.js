import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import BasicAddItems from "TodoList/src/components/BasicAddItems";
import { TouchableOpacity } from "react-native-gesture-handler";
import saveImage from "TodoList/assets/save.png"

const styles = StyleSheet.create({
icon:{
    width: 25,
    height: 25,
    tintColor: "#fff",
    marginRight: 20
}
});

export default class editTodo extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      title: "Editar tarea",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            props.route.params.onSave(this.state.todo);
            props.navigation.goBack();
          }}
        >
            <Image style={styles.icon} source={saveImage}></Image>
        </TouchableOpacity>
      ),
    });
    this.state = {
      todo: props.route.params.todo,
    };
  }
  updateTodo = (property) => {
    const newTodo = { ...this.state.todo, ...property };
    this.setState({ todo: newTodo });
  };
  render() {
    const { todo } = this.state;
    const { text, description, priority } = todo;
    return (
      <View>
        <Text> Editar tarea </Text>
        <BasicAddItems
          text={text}
          description={description}
          priority={priority}
          onChange={(newValueFromProperty) => this.updateTodo(newValueFromProperty)}
        />
      </View>
    );
  }
}
