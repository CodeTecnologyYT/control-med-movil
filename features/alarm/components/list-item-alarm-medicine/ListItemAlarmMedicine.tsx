import {useState} from "react";
import {View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {TextCustom} from "@/shared/components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {ItemAlarmMedicine} from "@/features/alarm/components/item-alarm-medicine/ItemAlarmMedicine"
import {useAlarmContext} from "@/features/alarm/context/AlarmContext";

export const ListItemAlarmMedicine = () => {
    const {
        alarms,
        changeToggleDelete,
        isShow,
        checkedIds,
        toggleCheckedAlarm,
        toggleShowCheckAlarm,
        sortedAlarms
    } = useAlarmContext();

    const onPressHandler = (id: string) => {
        if (!isShow) return;
        toggleCheckedAlarm(id);
    };

    const onLongPressHandler = (id: string) => {
        changeToggleDelete();
        toggleShowCheckAlarm(id);
    }

    return (
        <View className="flex-1 px-5">
            <View className="flex-row justify-between px-3 py-5">
                <TextCustom textWeight="bold">12 Junio Miercoles</TextCustom>
                <FontAwesome name="sort" size={16} color="gray" onPress={sortedAlarms}/>
            </View>
            <FlatList
                data={alarms}
                numColumns={2}
                horizontal={false}
                keyExtractor={item => `${item.id}`}
                contentContainerClassName="pb-safe-offset-24"
                columnWrapperClassName="mx-3 my-2 justify-between"
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <ItemAlarmMedicine alarm={item}
                                       isChecked={checkedIds.includes(item.id)}
                                       isShow={isShow}
                                       onPress={() => onPressHandler(item.id)}
                                       onLongPress={() => onLongPressHandler(item.id)}/>
                )}/>
        </View>
    )
}