import codesCurrent from '../codes/codesCurrent.json';
import type { CurrencyName, CurrencyData } from './utils/types';

const current = codesCurrent as CurrencyData[];
const currentCodes = current.map(({ code }) => code);
const currentAlphaCodes = current.map(({ code }) => code.alphabetic);
const currentNumericCodes = current.map(({ code }) => code.numeric);

/**
 * Returns an array of currency names.
 *
 * @returns Array of currency names.
 */
export function names() {
    return current.map(({ name }) => name);
}

/**
 * Returns an array of all the currency codes.
 *
 * @returns The array of currency codes.
 */
export function codes() {
    return currentCodes;
}

/**
 * Returns an array of all the alphabetic currency codes.
 *
 * @returns The array of alphabetic currency codes.
 */
export function alphaCodes() {
    return currentAlphaCodes;
}

/**
 * Returns an array of all the numeric currency codes.
 *
 * @returns The array of numeric currency codes.
 */
export function numericCodes() {
    return currentNumericCodes;
}

/**
 * Returns an array of objects with currency code and name pairs.
 *
 * @returns The array of objects with currency code and name pairs.
 */
export function codeNamePair() {
    return current.map(({ code, name }) => {
        return {
            code,
            name,
        };
    });
}

interface NamePairing {
    [key: string]: CurrencyName;
}

/**
 *  Returns an object with currency code (in alphabetic form) as key and the currency name as value.
 *
 *  @returns An object with the currency code as key and the currency name as value.
 */
export function codeAlphaNamePair() {
    const pairings = current.map(({ code, name }): [string, CurrencyName] => {
        return [code.alphabetic, name];
    });

    return pairings.reduce((acc: NamePairing, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
}

/**
 *  Returns an object with currency code (in numeric form) as key and the currency name as value.
 *
 *  @returns An object with the currency code as key and the currency name as value.
 */
export function codeNumericNamePair() {
    const pairings = current.map(({ code, name }): [string, CurrencyName] => {
        return [code.numeric, name];
    });

    return pairings.reduce((acc: NamePairing, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
}

/**
 * Returns the array of currency code data objects.
 *
 * @returns The array of currency code data objects.
 */
export function codeDatas() {
    return current;
}

interface CodeInput {
    code: string;
    numeric?: boolean;
}

/**
 * Returns the currency data for a given code.
 *
 * @param {CodeInput} args - The input object.
 * @returns The currency data of the matching currency code, or undefined if not found.
 */
export function codeData(args: CodeInput) {
    const { code, numeric } = args;

    return current.find(({ code: currentCode }) => {
        if (numeric && currentCode.numeric !== code.toUpperCase()) return false;
        if (!numeric && currentCode.alphabetic !== code.toUpperCase())
            return false;
        return true;
    });
}

/**
 * For a given currency code, find the entities that use that currency.
 *
 * @param args - The input object.
 * @returns The entities of the matching currency code, or undefined if not found.
 */
export function entities(args: CodeInput) {
    return codeData(args)?.entities;
}

/**
 * Finds the symbols for a given currency code.
 *
 * @param args - The input object.
 * @returns The name associated with the code, with it's units and denoymn.
 */
export function name(args: CodeInput) {
    return codeData(args)?.name;
}

/**
 * Finds the symbols for a given currency code.
 *
 * @param args - The input object.
 * @returns The base unit symbol(s) of the matching currency code, or undefined if not found.
 */
export function symbol(args: CodeInput) {
    return codeData(args)?.symbol;
}

export { CurrencyData as CurrentCurrency };

console.log(codeAlphaNamePair());
