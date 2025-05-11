import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'row'
};

export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[
    { backgroundColor },
    style,
    type === 'row' ? styles.row : undefined
  ]} {...otherProps} />;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});