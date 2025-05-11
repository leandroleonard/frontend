/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const main = '#e29547';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    main: main,
    text: '#11181C',
    background: '#fff',
    tint: main,
    icon: '#e29547',
    tabIconDefault: '#aaaaaa',
    tabIconSelected: main,
    placeholderText: '#dedede'
  },
  dark: {
    main: main,
    text: '#ECEDEE',
    background: '#363636',
    tint: tintColorDark,
    icon: '#e29547',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    placeholderText: '#dedede'
  },
};
