import {useEffect} from "react";
import {Slot, SplashScreen} from "expo-router";
import {useFonts} from "expo-font";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {AlarmProvider} from "@/features/alarm/context/AlarmContext";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'Roboto-ExtraBold': require("../assets/fonts/Roboto-ExtraBold.ttf"),
        'Roboto-Bold': require("../assets/fonts/Roboto-Bold.ttf"),
        'Roboto-SemiBold': require("../assets/fonts/Roboto-SemiBold.ttf"),
        'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
        'Roboto-Regular': require("../assets/fonts/Roboto-Regular.ttf"),
        'Roboto-Light': require("../assets/fonts/Roboto-Light.ttf"),
        'Roboto-ExtraLight': require("../assets/fonts/Roboto-ExtraLight.ttf"),
        'Roboto-Thin': require("../assets/fonts/Roboto-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync()
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return;

    return (
        <AlarmProvider>
            <GestureHandlerRootView style={{flex: 1}}>
                <Slot/>
            </GestureHandlerRootView>
        </AlarmProvider>
    );
}

export default RootLayout;
