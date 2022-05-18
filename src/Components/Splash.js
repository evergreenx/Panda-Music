import { View, Text, SafeAreaView } from "react-native";
import React, { useRef, useEffect } from "react";
import { COLORS } from "../Constants/theme";
import FocusedStatusBar from "./FocusedStatusBar";
import LottieView from "lottie-react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export default function Splash() {
  const animation = useRef(null);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primaryLight }}>
      <FocusedStatusBar background={COLORS.primaryLight} />

      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <LottieView
          source={require("../Assets/image/lf20_3zqh4wzr.json")}
          autoPlay
          ref={animation}
          //   loop={false}
          speed={10}
        />
      </View>
    </SafeAreaView>
  );
}
