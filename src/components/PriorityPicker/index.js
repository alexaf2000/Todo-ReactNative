import React from "react";
import { Platform, Text, View, Picker } from "react-native";

const priorities = ["Urgente", "Importante", "Normal", "No importante"];

const PriorityPicker = ({ priority, onChange }) => {
  renderAndroid = () => {
    return (
      <View style={{ borderWidth: 1, borderColor: "#fff", borderRadius: 5 }}>
        <Picker
          style={{ borderWidth: 1, borderColor: "red", elevation: 2 }}
          selectedValue={priority}
          onValueChange={(itemValue) => onChange(itemValue)}
        >
          {priorities.map((item, idx) => (
            <Picker.Item label={item} value={idx} />
          ))}
        </Picker>
      </View>
    );
  };

  return Platform.select({
    ios: () => this.renderIos(),
    android: () => this.renderAndroid(),
  })();
};

export default PriorityPicker;
