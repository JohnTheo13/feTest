// @flow
import storageAvailable from './storageAvailable';

export default (name: string, value: string[]) => {
  if (storageAvailable('localStorage')) {
    window.localStorage.setItem(name, JSON.stringify(value));
  }
};
