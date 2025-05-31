import {useState} from "react";
import {View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {TextCustom} from "@/shared/components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {ItemAlarmMedicine} from "@/features/alarm/components/medicine/item-alarm-medicine/ItemAlarmMedicine"
import {useAlarmMedicine} from "@/features/alarm/hooks/useAlarmMedicine";

export const ListItemAlarmMedicine = () => {
    const {alarms} = useAlarmMedicine();
    const [isShow, setIsShow] = useState(false);
    const [checkedIds, setCheckedIds] = useState<string[]>([]);

    const onPressHandler = (id: string) => {
        if (!isShow) return;
        // Delete and add item select
        setCheckedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const onLongPressHandler = (id: string) => {
        setIsShow(prevShow => {
            const nextShow = !prevShow;
            //Clean items and add item
            if (nextShow) {
                setCheckedIds([id])
            } else {
                setCheckedIds([]);
            }
            return nextShow;
        });
    }

    return (
        <View className="flex-1 px-5">
            <View className="flex-row justify-between px-3 py-5">
                <TextCustom textWeight="bold">12 Junio Miercoles</TextCustom>
                <FontAwesome name="sort" size={16} color="gray"/>
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