/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        const clonedNumbers = [...numbers, numbers[0]];
        return clonedNumbers;
    } else {
        const clonedNumbers = [...numbers];
        return [clonedNumbers[0], clonedNumbers[clonedNumbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // this will require a map

    const clonedNumbers = [...numbers];
    const tripledNumbers = clonedNumbers.map(
        (elementN: number): number => elementN * 3
    );
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //we need to iterate through the array and see which ones are letters
    // as we find the ones that are letters, we replace with str(0)
    //afterwards we map the array and convert every element to int
    const clonedNumbers = [...numbers];
    const toNumbers = clonedNumbers.map((elementN: string): number =>
        parseInt(elementN)
    );
    const replaceNaNum = toNumbers.map((elementNum: number): number =>
        elementNum != elementNum ? (elementNum = 0) : elementNum
    );

    return replaceNaNum;
    // return [1, 2];
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const clonedAmounts = [...amounts];
    const RemoveDollars = clonedAmounts.map((elementAmount: string): string =>
        elementAmount[0] == "$" ? elementAmount.replace("$", "") : elementAmount
    );
    const toNumbers = RemoveDollars.map((elementN: string): number =>
        parseInt(elementN)
    );

    const replaceNaNum = toNumbers.map((elementNum: number): number =>
        elementNum != elementNum ? (elementNum = 0) : elementNum
    );
    return replaceNaNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const clonedMessages = [...messages];
    const toUp = clonedMessages.map((element: string): string =>
        element[element.length - 1] == "!"
            ? element.replace(element, element.toUpperCase())
            : element
    );
    const removeQuestion = toUp.filter(
        (elementN: string): boolean => elementN[elementN.length - 1] != "?"
    );

    return removeQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsCopy = [...words];
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const removeLarger4 = wordsCopy.filter(
        (elementN: string): boolean => elementN.length < 4
    );
    return removeLarger4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 * so if it all elemenet of array consist of 'red', 'blue', or 'green'
 * i.e: ["red","blue","green","red"] => true ["red","purple","blue","green"] =>false
 */
export function allRGB(colors: string[]): boolean {
    const allRGB = colors.every(
        (color: string): boolean =>
            color.toLowerCase() == "red" ||
            color.toLowerCase() == "blue" ||
            color.toLowerCase() == "green"
    );
    return allRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 * sum=n1+n2+n3...nk
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const clonedAddends = [...addends];
        const fetchNumsAdded = clonedAddends.map((elementN: number): string =>
            elementN.toString() !=
            clonedAddends[clonedAddends.length - 1].toString()
                ? elementN.toString() + "+"
                : elementN.toString()
        );
        return sum.toString() + "=" + fetchNumsAdded.join("");
        /**
         * process:
         * 1: first need to map through array and obtain the sum of all values and store
         * that value in a let variable
         * 2:create a string with the format "sum="
         * 3: turn every element of the array into a string
         * 4: after every element add + to it except for the last element
         * 3 & 4: element.tostring()+"+"
         *
         */
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /**
     * step 1: Find the FIRST instance of a negative number and return the index at which it occured
     * step 2: map through array and sum every number up to the point where you found the negative
     * step 3: make copy of array and insert the sum after the index where first negative was found
     * step 4: GOOD JOB PAL, YOUR DONE
     * step 5: if no negatives, push total to end of list
     */
    return [];
}
