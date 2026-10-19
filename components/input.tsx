import { TextInput as ExpoTextInput } from "@expo/ui";
import { TextInputProps as ExpoTextInputProps } from "@expo/ui";

export function Input({ ...props }: ExpoTextInputProps) {
  return <ExpoTextInput {...props} />;
}

export type InputProps = ExpoTextInputProps;
