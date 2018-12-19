import storageAvailable from './storageAvailable';

export default (name, value) => {
  if (storageAvailable('localStorage')) {
    window.localStorage.setItem(name, JSON.stringify(value));
  }
};
