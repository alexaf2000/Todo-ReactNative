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

const priorities = ["Urgente", "Importante", "Normal", "No importante"];

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
            <Text style={{ fontWeight: "bold" }}>Título</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Inserta un título..."
              returnKeyType="done"
              autoCapitalize="sentences"
              onChangeText={(text) => this.setState({ text })}
            />
            <Text style={{ fontWeight: "bold" }}>Descripción</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Inserta una descripción (opcional)"
              returnKeyType="done"
              autoCapitalize="sentences"
              onChangeText={(description) => this.setState({ description })}
            />
            <Text style={{ fontWeight: "bold" }}>Prioridad</Text>
            <Picker
              selectedValue={priority}
              onValueChange={(itemValue) =>
                this.setState({ priority: itemValue })
              }
            >
              {priorities.map((item, idx) => (
                <Picker.Item label={item} value={idx} />
              ))}
            </Picker>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button title="Cancelar" onPress={onCloseModal} />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
