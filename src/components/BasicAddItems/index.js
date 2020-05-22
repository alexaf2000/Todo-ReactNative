import * as React from "react";
import { Text, TextInput, Picker, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  TextInput: {
    padding: 2,
    margin: 5,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
});

const priorities = ["Urgente", "Importante", "Normal", "No importante"];
const BasicAddItems = ({ text, description, priority, onChange }) => (
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
    <Picker
      selectedValue={priority}
      onValueChange={(itemValue) => onChange({ priority: itemValue })}
    >
      {priorities.map((item, idx) => (
        <Picker.Item label={item} value={idx} />
      ))}
    </Picker>
  </React.Fragment>
);

export default BasicAddItems;
