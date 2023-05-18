import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <Veiw Style = {styles.container}>
    <Button
      title="Click Me!" onPress={() => alert("SysArch 32 Project - Cordova")}
    /> 
  </Veiw>
  );cd 

const styles = {
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
};

export default App;