import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "../../components";

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = height;

const styles = StyleSheet.create({
  container: { width },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

export default function ({ title, right }: SlideProps) {
  const transform = [
    {
      translateY: (SLIDER_HEIGHT - 100) / 2 - 80,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
}
