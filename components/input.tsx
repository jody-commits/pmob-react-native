import { TextInput as ExpoTextInput, Host as ExpoHost, UniversalHostProps } from "@expo/ui";
import { TextInputProps as ExpoTextInputProps } from "@expo/ui";

export function Input({ hostProps, ...props }: ExpoTextInputProps & { hostProps?: UniversalHostProps }) {
  return (
    <ExpoHost matchContents {...hostProps}>
      <ExpoTextInput {...props} />
    </ExpoHost>
  );
}

export type InputProps = ExpoTextInputProps;
