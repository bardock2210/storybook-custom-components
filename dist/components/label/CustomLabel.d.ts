import { FC } from "react";
import "./customlabel.css";
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
    fontColor?: string;
    /**
     * This option sets the background color to the label.
     */
    backgroundColor?: string;
}
export declare const CustomLabel: FC<ICustomLabel>;
