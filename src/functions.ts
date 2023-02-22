/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const subtractor: number = temperature - 32;
    const divisor: number = 5 / 9;
    const formula: number = subtractor * divisor;
    return formula;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    // const nums: Array<number> = [first, second, third];
    // let summ : number = 0.0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) {
    //         summ += nums[i];
    //     }
    // }
    // let sum: number;
    // if (first > 0 && second > 0 && third > 0) {
    //     sum = first + second + third;
    // } else if (first > 0 && second > 0 && third < 0) {
    //     sum = first + second;
    // } else if (first > 0 && second < 0 && third > 0) {
    //     sum = first + third;
    // } else if (first < 0 && second > 0 && third > 0) {
    //     sum = second + third;
    // } else {
    //     sum = 0;
    // }
    return 0;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return "";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return true;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    return true;
}
