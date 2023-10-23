import { ComponentsState } from ".";
import type { NotificationProps } from "@/types/notification";

type ComponentsActionType =
  | { type: "ADD_NOTIFICATION"; payload: NotificationProps }
  | { type: "CLEAR_NOTIFICATION"; payload: NotificationProps };

export const componentsReducer = (
  state: ComponentsState,
  action: ComponentsActionType
): ComponentsState => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notification: { ...state.notification, ...action.payload },
      };
    case "CLEAR_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    default:
      return state;
  }
};
