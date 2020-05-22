import React, { Component } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Picker,
} from "react-native";
import BasicAddItems from "TodoList/src/components/BasicAddItems";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    //backgroundColor: "rgba(0,0,0,0.5)", this is the background overlay
    alignItems: "flex-end", // This two lines shows the modal at the bottom of the page
    flexDirection: "row",
  },
  modalBox: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -11,
    },
    shadowOpacity: 1,
    shadowRadius: 14.78,

    elevation: 22,
    //! alignItems: "flex-end",
  },
  TextInput: {
    padding: 2,
    margin: 5,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
});

const initialState = {
  text: "",
  description: "",
  priority: 0,
};

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Will set the state with the paramets from the constant
      ...initialState,
    };
  }
  addTodo = () => {
    const { onAddTodo, onCloseModal } = this.props;
    const { text, description, priority } = this.state;
    onAddTodo({ text, description, priority });
    // reset initialState for next Add
    //this.setState(initialState);
    onCloseModal();
  };
  render() {
    const { visible, onAddTodo, onCloseModal } = this.props; // This will be get as attributes
    const { text, priority, description } = this.state;
    return (
      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <BasicAddItems text={text} description={description} priority={priority} onChange={value=>this.setState(value)} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button title="Cancelar" onPress={onCloseModal} />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
