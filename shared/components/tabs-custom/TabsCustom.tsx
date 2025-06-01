import {JSX, ReactNode} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "@/shared/constants/colors";

interface IconProps {
    color?: string;
}

type IconMap = {
    [key: string]: (props: IconProps) => JSX.Element;
};

interface TabsCustomProps extends BottomTabBarProps {
    activeDelete: boolean;
    deleteAlarms: () => void;
}

export const TabsCustom = ({state, descriptors, navigation, activeDelete, deleteAlarms}: TabsCustomProps) => {
    const tabNameMain = "alarm/index";
    const icons: IconMap = {
        "home/index": (props: IconProps) => (
            <Ionicons name="home" size={20} color={Colors.primary} {...props} />
        ),
        "alarm/index": (props: IconProps) => (
            <View className="bg-primary rounded-full px-4 py-4">
                <Ionicons name={activeDelete ? "trash-bin-outline" : "add"} size={20} color={"white"}/>
            </View>
        ),
        "setting/index": (props: IconProps) => (
            <Ionicons name="settings" size={22} color={Colors.primary} {...props} />
        ),
    };
    return (
        <View
            className="bg-background flex-row px-6 shadow-xl shadow-gray-400 absolute bottom-safe left-1/2 transform -translate-x-1/2 rounded-full">
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        className={[
                            "flex justify-center py-2 items-center w-24",
                            route.name === tabNameMain ? "shadow shadow-gray-300" : "shadow-none",
                        ].join(" ")}
                        key={route.name}
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={() => route.name === tabNameMain && activeDelete ? deleteAlarms() : onPress()}
                        onLongPress={onLongPress}
                    >
                        {
                            icons[route.name]({
                                color: route.name === tabNameMain ? Colors.primary : isFocused ? Colors.primary : Colors.inactive
                            })
                        }
                        {
                            route.name !== tabNameMain && <Text className="font-roboto-regular" style={{
                                fontSize: 12,
                                color: isFocused ? Colors.primary : Colors.inactive,
                            }}>
                                {label as ReactNode}
                            </Text>}
                    </TouchableOpacity>
                );
            })}
        </View>

    );

}