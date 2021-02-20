import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { Button } from "../../components";
import { Box, Text } from "../../components/Theme";

const picture = require("../../../assets/images/05.png");
export const assets = [picture];

const styles = StyleSheet.create({ picture: {} });
const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        justifyContent="flex-end"
        alignItems="center"
        borderBottomRightRadius="xl"
        backgroundColor="lightGrey"
      >
        <Image source={picture} style={styles.picture} />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="lightGrey"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        >
          <Box
            borderTopLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            backgroundColor="white"
            flex={1}
            padding="xl"
          >
            <Text variant="title1">Lets get started</Text>
            <Text textAlign="center" variant="body">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button variant="primary" label="Have an account? Login" />
            <Button variant="default" label="Join us. Its free" />
            <Button variant="transparent" label="Forgot password?" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Welcome;
