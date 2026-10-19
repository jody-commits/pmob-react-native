import { TextInput as ExpoTextInput, Host as ExpoHost } from "@expo/ui";
import { TextInputProps as ExpoTextInputProps } from "@expo/ui";

export function Input({ ...props }: ExpoTextInputProps) {
  return (
    <ExpoHost matchContents>
      <ExpoTextInput {...props} />
    </ExpoHost>
  );
}

export type InputProps = ExpoTextInputProps;
