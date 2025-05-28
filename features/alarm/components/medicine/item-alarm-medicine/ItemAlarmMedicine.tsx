import {Pressable, View} from "react-native";
import {Image} from 'expo-image';
import {TextCustom} from "@/shared/components"
import {AlarmMedicine} from "@/features/alarm/models";

interface Props {
    onPress?: () => void;
    onLongPress?: () => void;
    alarm: AlarmMedicine;
}

export const ItemAlarmMedicine = ({onPress, onLongPress, alarm}: Props) => {
    const {time, img, dosage, unit, quantity, name} = alarm;
    return (
        <Pressable
            className={[
                // Default Config
                "rounded-3xl px-4 py-5 self-baseline gap-2 shadow-md shadow-gray-300 justify-center items-center w-[48%]",
                // Active Color Alarm
                time > 0 ? "bg-white" : "bg-primary",
            ].join(" ")}
        >
            <Image
                style={{width: 100, aspectRatio: 1}}
                source={img}
                placeholder={"image"}
                contentFit="cover"
                transition={1000}
            />
            <TextCustom textWeight="semibold">
                {name}
            </TextCustom>
            <TextCustom variant="sm" textColor="subtitle">
                {quantity} x {dosage} {unit}
            </TextCustom>
            <View className="bg-primary absolute top-4 right-3 px-2 py-1 rounded-full">
                <TextCustom textColor="active" variant="xs" numberOfLines={1}>{time}</TextCustom>
            </View>
        </Pressable>
    )
}