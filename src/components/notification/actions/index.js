import { ADD_NOTIFICATION } from "./types";

export const addNotification = (message, level) => ({
  type: ADD_NOTIFICATION,
  message,
  level
});
