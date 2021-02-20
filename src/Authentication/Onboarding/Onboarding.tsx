import * as React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  interpolateColors,
  multiply,
} from "react-native-reanimated";
import Slide, { SLIDER_HEIGHT } from "./Slide";
import { useScrollHandler } from "react-native-redash/lib/module/v1";
import Subslide from "./Subslide";
import { Dot, theme } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    color: "#BFEAF5",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Dont Worry! Find the best outfit here.",
    picture: require("../../../assets/images/1.png"),
  },
  {
    title: "Playful",
    color: "#BEECC4",
    subtitle: "Hear It First",
    description:
      "Hating the clothes in your wordrobe? Explore hundreds of outfit ideas.",
    picture: require("../../../assets/images/4.png"),
  },
  {
    title: "Excentric",
    color: "#FFE4D9",
    subtitle: "Your Style Your Way",
    description:
      "Create your individual & unique style and look amazing everyday.",
    picture: require("../../../assets/images/3.png"),
  },
  {
    title: "Funky",
    color: "#ffDDD4",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality.",
    picture: require("../../../assets/images/2.png"),
  },
];
export const assets = slides.map((slide) => slide.picture);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT * 0.6,
    borderBottomEndRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    borderTopLeftRadius: theme.borderRadii.xl,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl * 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
});

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "OnBoarding">) => {
  const scroll = React.useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image style={styles.picture} source={picture} />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="normal"
          showsHorizontalScrollIndicator={false}
          bounces={true}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
              width: width * slides.length,
              flexDirection: "row",
            }}
          >
            {slides.map(({ description, subtitle }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  {...{ description, subtitle, last }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
