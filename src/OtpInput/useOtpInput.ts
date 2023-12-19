import { useRef, useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { OtpInputProps } from "./OtpInput.types";

export const useOtpInput = ({ onTextChange, onFilled, numberOfCharacters }: OtpInputProps) => {
  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>(null);
  const focusedInputIndex = text.length;

  const handlePress = () => {
    // To fix bug when keyboard is not popping up after being dismissed
    if (!Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
    inputRef.current?.focus();
  };

  const handleTextChange = (value: string) => {
    setText(value);
    onTextChange?.(value);
    if (value.length === numberOfCharacters) {
      onFilled?.(value);
    }
  };

  const setTextWithRef = (value: string) => {
    const normalizedValue = value.length > numberOfCharacters ? value.slice(0, numberOfCharacters) : value;
    handleTextChange(normalizedValue);
  };

  const clear = () => {
    setText("");
  };

  const focus = () => {
    inputRef.current?.focus();
  };

  return {
    models: { text, inputRef, focusedInputIndex },
    actions: { handlePress, handleTextChange, clear, focus },
    forms: { setText, setTextWithRef },
  };
};
