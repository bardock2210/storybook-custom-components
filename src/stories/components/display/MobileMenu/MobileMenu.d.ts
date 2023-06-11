import { FC } from "react";
export interface MobileMenuProps {
    anchorEl?: Element | ((element: Element) => Element) | null;
    cartMenuHandler: () => void;
    cartTotalElements: number;
    notificationMenuHandler: () => void;
    notificationTotal: number;
    onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    open: boolean;
    profileMenuHandler: () => void;
}
export declare const MobileMenu: FC<MobileMenuProps>;
