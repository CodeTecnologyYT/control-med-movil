import {Text, TextProps} from "react-native";

interface Props extends TextProps {
    variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs',
    textColor?: 'primary' | 'normal' | 'active',
    textWeight?: 'bold' | 'normal'
}

export const TextCustom = ({variant = 'md', textColor = 'normal', textWeight = 'normal', ...rest}: Props) => {
    return (
        <Text
            className={[
                // Size Text
                variant === 'xl' && "text-4xl",
                variant === 'lg' && "text-xl",
                variant === 'md' && "text-md",
                variant === 'sm' && "text-sm",
                variant === 'xs' && "text-xs",
                // Color Text
                textColor === 'primary' && "text-primary",
                textColor === 'normal' && "text-gray-800",
                textColor === 'active' && "text-white",
                // Weight Text
                textWeight === 'bold' && "font-bold",
                textWeight === 'normal' && "font-normal",
            ].join(" ")}
            {...rest} />
    )
}