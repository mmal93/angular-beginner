/**
 * Returns the sum of the array
 * 
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
export function sumOfArray(arr : number[]) : number {
    return arr.reduce((a : number, b : number) : number => a + b, 0);
}
/**
 * Returns the sum of the array
 * 
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
export function sumOfArray2(arr : number[]) : number {
    let sum : number = 0;
    for (let counter = 0; counter < arr.length; counter++) {
        sum += arr[counter];
    }
    return sum;
}
/**
 * Returns the sum of the array
 * 
 * @param {Array} arr Is an array of numbers
 * @returns {Number} The sum of the array
 */
export function sumOfArray3(arr : number[]) : number {
    let sum : number = 0;
    arr.forEach((item : number) : void => {
        sum += item;
    });
    return sum;
}
export default {
    sumOfArray,
    sumOfArray2,
    sumOfArray3
}
