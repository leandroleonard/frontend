import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { ButtonIcon } from "@/components/ButtonIcon";
import InputSearch from "@/components/form/InputSearch";
import CategoryListHorizontal from "@/components/ui/CategoryListHorizontal";
import PromoSlides from "@/components/ui/PromoSlides";

export default function Index() {
  const backgroundContainer = useThemeColor({ light: Colors.light.background, dark: Colors.dark.background }, 'background');
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundContainer }]}>

          <ThemedView type="row" style={{ alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 }}>
            <ThemedText type="title">
              {`Explore What \nYour Home Needs`}
            </ThemedText>

            <ButtonIcon iconName="notifications" size="lg" />
          </ThemedView>

          <InputSearch placeholder="Chair, desk, lamp, etc" />

          <ThemedView>
            <CategoryListHorizontal />
          </ThemedView>


          <ThemedView style={{marginVertical: 20}}>
            <PromoSlides />
          </ThemedView>

        </SafeAreaView>
      </SafeAreaProvider>
    </React.Fragment>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20
  }
});