import { ColorValue, TextStyle, ViewStyle } from "react-native";
export interface OtpInputProps {
    numberOfCharacters: number;
    inputMode?: "numeric" | "text";
    autoFocus?: boolean;
    focusColor?: ColorValue;
    onTextChange?: (text: string) => void;
    onFilled?: (text: string) => void;
    hideStick?: boolean;
    focusStickBlinkingDuration?: number;
    secureTextEntry?: boolean;
    theme?: Theme;
}
export interface OtpInputRef {
    clear: () => void;
    focus: () => void;
    setValue: (value: string) => void;
}
export interface Theme {
    containerStyle?: ViewStyle;
    inputsContainerStyle?: ViewStyle;
    pinCodeContainerStyle?: ViewStyle;
    pinCodeTextStyle?: TextStyle;
    focusStickStyle?: ViewStyle;
    focusedPinCodeContainerStyle?: ViewStyle;
}
