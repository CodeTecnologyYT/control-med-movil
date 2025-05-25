import {Slot} from "expo-router";
import {Text, View} from "react-native";

const  RootLayout = ()=> {
    return (
        <View>
            <Text>Hello</Text>
            <Slot/>
        </View>
    )
}

export default RootLayout;
