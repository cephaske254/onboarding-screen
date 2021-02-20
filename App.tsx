import React from "react";
import { assets as authenticationAssets } from "./src/Authentication";
import { ThemeProvider } from "@shopify/restyle";
import { LoadAssets, theme } from "./src/components";
import { AuthenticationNavigator } from "./src/components";
const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme, assets }}>
      <LoadAssets fonts={fonts}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
