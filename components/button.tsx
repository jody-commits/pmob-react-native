import { Button as ExpoButton, Text as ExpoText, Host as ExpoHost } from "@expo/ui";
import { ButtonProps as ExpoButtonProps, TextProps as ExpoTextProps } from "@expo/ui";

export function Button({ ...props }: ExpoButtonProps) {
  return (
    <ExpoHost matchContents>
      <ExpoButton {...props} />
    </ExpoHost>
  );
}

export type ButtonProps = ExpoButtonProps;

export function ButtonText({ ...props }: ExpoTextProps) {
  return <ExpoText {...props} />;
}

export type ButtonTextProps = ExpoTextProps;
