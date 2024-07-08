import { useEffect, useState } from "react";
import { ScreenProps } from "./types";

const SCREEN_BREAK_POINTS = {
  small: `(max-width: 671px)`,
  medium: `(min-width: 672px) and (max-width: 979px)`,
  large: `(min-width: 980px) and (max-width: 1259px)`,
  largeplus: `(min-width: 1260px)`,
};

const SUPPORTED_SCREENS: Array<string> =
  Object.keys(SCREEN_BREAK_POINTS).reverse();

const getScreenProps = (screen?): ScreenProps => {
  let screenProps: ScreenProps = {
    is_small: false,
    is_medium: false,
    is_large: false,
    is_largeplus: false,
  };

  if (SUPPORTED_SCREENS.includes(screen)) {
    SUPPORTED_SCREENS.forEach((screenType) => {
      let screenProp = "is_" + screenType;
      if (screenType == screen) {
        screenProps[screenProp as keyof ScreenProps] = true;
      }
    });
  }

  return screenProps;
};

const getMatchedScreen = (): string => {
  let matchedScreen = "";
  if (typeof window != undefined) {
    SUPPORTED_SCREENS.forEach((screen) => {
      const matchMedia = window.matchMedia(SCREEN_BREAK_POINTS[screen]);
      if (!matchedScreen && matchMedia?.matches) {
        matchedScreen = screen;
      }
    });
  }
  return matchedScreen;
};

const useMediaQueryScreen = (): {
  screen: string;
  screenProps: ScreenProps;
} => {
  const [screenData, setScreenData] = useState<{
    screen: string;
    screenProps: ScreenProps;
  }>({
    screen: getMatchedScreen(),
    screenProps: getScreenProps(getMatchedScreen()),
  });

  useEffect(() => {
    const matchMediaArray: Array<MediaQueryList> = [];

    SUPPORTED_SCREENS.map((screen: string, idx: number) => {
      matchMediaArray[idx] = window.matchMedia(
        SCREEN_BREAK_POINTS[screen as keyof {}]
      );
      matchMediaArray[idx].addEventListener("change", handleChange);
    });

    return () => {
      matchMediaArray.map((matchMedia) => {
        matchMedia.removeEventListener("change", handleChange);
      });
    };
  }, []);

  const handleChange = (e?: MediaQueryListEvent) => {
    if (e?.matches) {
      let matchedScreen = getMatchedScreen();
      updateScreenProps(matchedScreen);
    }
  };

  const updateScreenProps = (matchedScreen: string) => {
    if (!screenData || matchedScreen != screenData.screen) {
      let newScreenData = {
        screen: matchedScreen,
        screenProps: getScreenProps(matchedScreen),
      };

      setScreenData(newScreenData);
    }
  };
  return screenData;
};

export default useMediaQueryScreen;
