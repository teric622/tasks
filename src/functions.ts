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
    let sum: number;
    if (first > 0 && second > 0 && third > 0) {
        sum = first + second + third;
    } else if (first > 0 && second > 0 && third < 0) {
        sum = first + second;
    } else if (first > 0 && second < 0 && third > 0) {
        sum = first + third;
    } else if (first < 0 && second > 0 && third > 0) {
        sum = second + third;
    } else if (first < 0 && second < 0 && third > 0) {
        sum = third;
    } else if (first < 0 && second > 0 && third < 0) {
        sum = second;
    } else if (first > 0 && second < 0 && third < 0) {
        sum = first;
    } else {
        sum = 0;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const mesagup: string = message.toUpperCase();
    return mesagup + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const isqMark: boolean = message.at(-1) == "?" ? true : false;
    return isqMark;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const upYes: string = "yes".toUpperCase();
    const lowYes: string = "yes".toLowerCase();
    const upNo: string = "no".toUpperCase();
    const lowNo: string = "no".toLowerCase();
    if (word == upYes || word == lowYes) {
        return true;
    } else if (word == upNo || word == lowNo) {
        return false;
    } else {
        return null;
    }
}
