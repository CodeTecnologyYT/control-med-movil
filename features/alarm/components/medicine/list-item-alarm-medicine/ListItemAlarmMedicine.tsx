import {View} from "react-native";
import {ItemAlarmMedicine} from "@/features/alarm/components/medicine/item-alarm-medicine/ItemAlarmMedicine"
import {useAlarmMedicine} from "@/features/alarm/hooks/useAlarmMedicine";
import {FlatList} from "react-native-gesture-handler";

export const ListItemAlarmMedicine = () => {
    const {alarms} = useAlarmMedicine();
    return (
        <View className="flex-1">
            <FlatList
                data={alarms}
                numColumns={2}
                horizontal={false}
                keyExtractor={item => `${item.id}`}
                contentContainerClassName="pt-5 px-5"
                columnWrapperClassName="mx-6 my-2 justify-between"
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <ItemAlarmMedicine alarm={item}/>
                )}/>
        </View>
    )
}