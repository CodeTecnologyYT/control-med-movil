import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {TextCustom, ButtonCustom} from "@/shared/components";
import {useNavigation} from "expo-router";
import {DrawerActions} from "@react-navigation/native";
import {
    ListItemAlarmMedicine
} from "@/features/alarm/components/medicine/list-item-alarm-medicine/ListItemAlarmMedicine";

const HomeControlMedScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View className="flex-1">
            <View style={{paddingTop: insets.top + 20}}
                  className="bg-primary px-10 pb-14 gap-2 rounded-b-3xl">
                <View className="flex flex-row gap-1 items-center">
                    <FontAwesome name="heartbeat" size={14} color={"white"}/>
                    <TextCustom textColor="active" variant="sm" textWeight="semibold">ControlMed</TextCustom>
                </View>
                <TextCustom variant="xl" textWeight="bold" textColor="active">
                    La salud {"\n"}
                    empieza con un {"\n"}
                    buen {"\n"}
                    recordatorio
                </TextCustom>
                <TextCustom textColor="active" variant="sm">Una buena forma de mantener tu salud</TextCustom>
                <ButtonCustom iconName="angle-right">Iniciar Recordatorio</ButtonCustom>
                <FontAwesome onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)} name="bars" size={20} color={"white"} className="absolute right-10 top-1/3"/>
                <StatusBar style="light"/>
            </View>
            <ListItemAlarmMedicine/>
        </View>
    )
}

export default HomeControlMedScreen;