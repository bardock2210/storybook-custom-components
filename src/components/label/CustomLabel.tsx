import { FC } from "react";
import "./customlabel.css";

export type HexColorValue = `#${string}`;
export interface ICustomLabel {
  /**
   * This is the principal message to show inside the label.
   */
  label: string;
  /**
   * This is the label size.
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * This option allow to capitalize the message.
   */
  allCaps?: boolean;
  /**
   * This option sets the color of the label.
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This option sets a custom hexa color to the label.
   */
  fontColor?: HexColorValue;
}

export const CustomLabel: FC<ICustomLabel> = ({
  label,
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
