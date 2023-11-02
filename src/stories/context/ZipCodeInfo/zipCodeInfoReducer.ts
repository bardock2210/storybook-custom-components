import { ZipCodeInfoState } from ".";
import type { NotificationProps } from "@/types/notification";

type ZipCodeInfoActionType =
  | { type: "ADD_NOTIFICATION"; payload: NotificationProps }
  | { type: "CLEAR_NOTIFICATION"; payload: NotificationProps };

export const zipCodeInfoReducer = (
  state: ZipCodeInfoState,
  action: ZipCodeInfoActionType
): ZipCodeInfoState => {
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
