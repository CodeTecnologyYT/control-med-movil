import {Pressable, View} from "react-native";
import {Image} from 'expo-image';
import {TextCustom} from "@/shared/components"
import {AlarmMedicine} from "@/features/alarm/models/AlarmMedicine";
import {useEffect, useState} from "react";
import {Checkbox} from "expo-checkbox";
import {Colors} from "@/shared/constants/colors";

interface Props {
    alarm: AlarmMedicine;
    isChecked: boolean;
    activeAlarm?: boolean;
    isShow?: boolean;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const ItemAlarmMedicine = ({
                                      alarm,
                                      isChecked = false,
                                      activeAlarm = false,
                                      isShow = false,
                                      onPress,
                                      onLongPress,
                                  }: Props) => {
    const {time, img, dosage, unit, quantity, name} = alarm;


    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            className={[
                // Default Config
                "rounded-3xl px-4 py-5 self-baseline gap-2 shadow-md  justify-center items-center w-[48%] relative",
                // Active Color Alarm
                activeAlarm ? "bg-primary shadow-gray-300 active:opacity-95" : "bg-white shadow-gray-300 active:opacity-85",
            ].join(" ")}
        >
            {
                isShow && <Checkbox
                    style={{
                        borderColor: activeAlarm ? "white" : Colors.primary,
                        borderRadius: 100,
                        transform: [{scaleX: 0.8}, {scaleY: 0.8}]
                    }}
                    value={isShow && isChecked}
                    color={isChecked ? activeAlarm ? Colors.activeCheckBox : Colors.primary : undefined}
                    className={"absolute top-4 left-3"}
                />
            }
            <Image
                style={{width: 80, aspectRatio: 1}}
                source={img}
                placeholder={"image"}
                contentFit="cover"
                transition={1000}
            />
            <TextCustom textWeight="semibold" textColor={activeAlarm ? "active" : "normal"}>
                {name}
            </TextCustom>
            <TextCustom variant="sm" textColor={activeAlarm ? "active" : "subtitle"}>
                {quantity} x {dosage} {unit}
            </TextCustom>
            <View className={[
                // Config Default
                "absolute top-4 right-3 px-2 py-1 rounded-full",
                // Background active
                activeAlarm ? "bg-white" : "bg-primary",
            ].join(" ")}>
                <TextCustom textColor={activeAlarm ? "primary" : "active"} variant="xs"
                            numberOfLines={1}>{time}</TextCustom>
            </View>
        </Pressable>
    )
}