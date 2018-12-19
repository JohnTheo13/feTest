import storageAvailable from './storageAvailable';

export default name => {
  if (storageAvailable('localStorage')) {
    return JSON.parse(window.localStorage.getItem(name));
  }
  return null;
};
