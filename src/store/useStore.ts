import { createPinia, type Pinia } from "pinia";

/**
 * @description This is a singleton store that is used to manage the state
 * of the Social App.
 * It is utilized both in the local development environment
 * and in the remote federated modules as well.
 */
let _store: Pinia | undefined;

/**
 * @summary Get the Pinia store instance for the Social App
 * @important Any references to the store should be made through this function.
 */
export const getStore = (): Pinia => {
  if (!_store) _store = createPinia();
  return _store;
};

/**
 * @summary Destroy the Pinia store instance.
 * @description This function is used to destroy the store instance
 * when the application is unmounted.
 * This is useful in the remote federated modules where the app needs
 * a fresh store instance when it is mounted again.
 */
export const destroyStore = (): void => {
  _store = undefined;
};
