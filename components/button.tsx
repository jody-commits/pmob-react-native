import { Button as ExpoButton, Text as ExpoText, Host as ExpoHost } from "@expo/ui";
import { ButtonProps as ExpoButtonProps, TextProps as ExpoTextProps, UniversalHostProps } from "@expo/ui";

export function Button({ hostProps, ...props }: ExpoButtonProps & { hostProps?: UniversalHostProps }) {
  return (
    <ExpoHost matchContents {...hostProps}>
      <ExpoButton {...props} />
    </ExpoHost>
  );
}

export type ButtonProps = ExpoButtonProps;

export function ButtonText({ ...props }: ExpoTextProps) {
  return <ExpoText {...props} />;
}

export type ButtonTextProps = ExpoTextProps;
