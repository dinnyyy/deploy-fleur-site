import { useState } from "react";
import { View } from "react-native";
export const ShowMessageButton = (props) => {
  const [displayText, setDisplayText] = useState("");
  const [buttonName, changeButtonName] = useState("Show Message");
  let pressed = false;

  const handleButtonPress = () => {
    if (pressed) {
      pressed = false;
      setDisplayText("");
      changeButtonName("Show Message");
    } else {
      pressed = true;
      setDisplayText(props.description);
      changeButtonName("Hide Message");
    }
  };

  return (
    <View>
      <button onClick={handleButtonPress}>{buttonName}</button>
      <div className="displayText">{displayText}</div>
    </View>
  );
};
