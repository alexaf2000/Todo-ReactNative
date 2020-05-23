import * as React from "react";
import { Text, TextInput, Picker, View, StyleSheet } from "react-native";
import PriorityPicker from "../PriorityPicker";

const styles = StyleSheet.create({
  TextInput: {
    padding: 2,
    margin: 5,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
});


const BasicAddItems = ({ text, description, priority, onChange }) =>{
  return (
  <React.Fragment>
    <Text style={{ fontWeight: "bold" }}>Título</Text>
    <TextInput
      style={styles.TextInput}
      placeholder="Inserta un título..."
      returnKeyType="done"
      autoCapitalize="sentences"
      value={text}
      onChangeText={(text) => onChange({ text })}
    />
    <Text style={{ fontWeight: "bold" }}>Descripción</Text>
    <TextInput
      style={styles.TextInput}
      placeholder="Inserta una descripción (opcional)"
      returnKeyType="done"
      autoCapitalize="sentences"
      value={description}
      onChangeText={(description) => onChange({ description })}
    />
    <Text style={{ fontWeight: "bold" }}>Prioridad</Text>
    <PriorityPicker priority={priority} onChange={priority=> onChange({priority})}></PriorityPicker>
  </React.Fragment>
)};

export default BasicAddItems;
