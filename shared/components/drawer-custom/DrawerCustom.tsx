import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {TextCustom} from "@/shared/components/text-custom/TextCustom";
import {Ionicons} from "@expo/vector-icons";
import {View} from "react-native";
import {DrawerActions} from "@react-navigation/native";

export const DrawerCustom = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView {...props}>
            <View className="items-end justify-end">
                <Ionicons name="close-outline" size={25} color="gray" onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} />
            </View>
            <TextCustom textWeight="semibold" variant="lg" className="py-5">Menu</TextCustom>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}