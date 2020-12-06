import React from "react";
import { Button, View } from "react-native";

const AddButton = ({ eventHandler, color = "blue", title = "ADD" }) => {
  return (
    <View style={{ width: "50%", margin: 1 }}>
      <Button color={color} title={title} onPress={eventHandler} />
    </View>
  );
};

export default AddButton;
