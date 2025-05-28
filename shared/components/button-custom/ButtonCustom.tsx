import {PressableProps, Pressable} from "react-native";
import {TextCustom} from '@/shared/components/text-custom/TextCustom'
import FontAwesome from '@expo/vector-icons/FontAwesome';


type FontAwesomeName = keyof typeof FontAwesome.glyphMap;

interface Props extends PressableProps {
    children: string,
    isPrimary?: boolean,
    onPress?: () => void,
    iconName?: FontAwesomeName
}

export const ButtonCustom = ({children, onPress, isPrimary = false, iconName}: Props) => {
    return (
        <Pressable
            className={[
                "px-7 py-3 rounded-full self-baseline flex  flex-row items-center justify-center gap-2",
                // Background Color Primary
                isPrimary ? "bg-primary" : "bg-white",
            ].join(" ")}
            onPress={onPress}>
            <TextCustom textWeight="semibold" textColor={isPrimary ? "active" : "primary"}>{children}</TextCustom>
            {iconName && <FontAwesome name={iconName} size={16} color={isPrimary ? "white" : "#204397"}/>}
        </Pressable>
    )
}