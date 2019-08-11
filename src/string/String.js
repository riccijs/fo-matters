/* String */
export const lettersOnly = str => str.replace(/[^A-Za-z?]/g, '')
export const alphaNumericOnly = str => str.replace(/[^a-z0-9]/gi, '')
export const minLength = (str, min) => str.length >= min
export const maxLength = (str, max) => str.substr(0, max)
export const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.substr(1)