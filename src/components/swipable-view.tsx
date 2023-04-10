import React from "react";
import {Dimensions} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS
} from "react-native-reanimated";
import {Box} from "native-base";
import {makeStyledComponent} from "../utils/styled";

const StyledView = makeStyledComponent(Animated.View)

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  children: React.ReactNode,
  backView?: React.ReactNode,
  onSwipeLeft?: () => void
}

const {width: SCREEN_WIDTH} = Dimensions.get('window')
const SWIPE_THRESHOLD = -SCREEN_WIDTH * 0.2

const SwipeView = (props: Props) => {
  const {
    children,
    backView,
    onSwipeLeft,
    simultaneousHandlers} = props
  const translateX = useSharedValue(0)
  const pandGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = Math.max(-128, Math.min(0, event.translationX ))
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD
    }
  })
}

export default SwipeView