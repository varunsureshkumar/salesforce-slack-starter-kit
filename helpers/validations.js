// helpers/validation.js

/**
 * isEmpty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
// eslint-disable-next-line no-unused-vars
const isEmpty = (input) => {
  if (input === undefined || input === '' || input === null) {
    return true;
  }
  return false;
};
