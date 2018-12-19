// @flow
import storageAvailable from './storageAvailable';

export default (name: string) => {
  if (storageAvailable('localStorage')) {
    return JSON.parse(window.localStorage.getItem(name));
  }
  return null;
};
