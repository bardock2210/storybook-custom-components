import { FC } from "react";
export interface HeaderProps {
    cartMenuHandler: () => void;
    cartTotalElements: number;
    notificationMenuHandler: () => void;
    notificationTotal: number;
    profileMenuHandler: () => void;
}
export declare const Header: FC<HeaderProps>;
