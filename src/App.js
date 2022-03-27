import React, { useState } from "react";
import {
  View,
  Text,
  CheckBox,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
const App = () => {
  const [agree, setAgree] = useState(false);
  const [user, setUser] = useState("enter you name");
  const [passsword, setPassword] = useState("prakash@123");
  return (
    <View>
      <Text style={styles.user}>userName:</Text>

      <View>
        <TextInput
          title="Enter you userName"
          style={{ borderWidth: 1, height: 30 }}
          onChangeText={(e) => {
            setUser(e);
          }}
        />
      </View>
      <View>
        <Text style={styles.passsword}>Enter you password</Text>
        <TextInput
          title="enter your password"
          value={passsword}
          style={styles.input}
          secureTextEntry={true}
          autoCorrect="false"
          autoCaptalize="none"
        />
      </View>
      <View>
        <CheckBox
          value={agree}
          onValueChange={() => {
            setAgree(!agree);
          }}
          color={agree ? "green" : undefined}
        />
        <Text style={{}}>I agree with terms and condidtions</Text>
      </View>

      <TouchableOpacity
        style={[
          { alignItems: "center" },
          { backgroundColor: agree ? "green" : "grey" }
        ]}
        disabled={!agree}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  passsword: {
    padding: "6px"
  },
  user: {
    padding: "6px"
  },
  input: {
    borderWidth: 1,
    height: 30
  }
});
