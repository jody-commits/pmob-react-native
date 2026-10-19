import { Button as ExpoButton, Text as ExpoText } from "@expo/ui";
import { ButtonProps as ExpoButtonProps, TextProps as ExpoTextProps } from "@expo/ui";

export function Button({ ...props }: ExpoButtonProps) {
  return <ExpoButton {...props} />;
}

export type ButtonProps = ExpoButtonProps;

export function ButtonText({ ...props }: ExpoTextProps) {
  return <ExpoText {...props} />;
}

export type ButtonTextProps = ExpoTextProps;
