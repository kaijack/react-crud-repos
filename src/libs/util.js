/* eslint import/prefer-default-export: 0 */

/**
 * For an array containing objects, pass key with value filter index
 * @param key {String}
 * @param val {String | Number | Boolean}
 * @param arr {Array}
 * @return {Number}
 */
export const findIndexByKey = (key, val, arr) => arr.findIndex(item => item[key] === val);
