/**
 * Recursion
 */

// 沒有使用 Recursive Type
type ValueOrArray<T> = T | T[];

// 使用了 Recursive Type Aliases
// type ValueOrNestedArray<T> = T | T[] | T[][] | T[][][] | ...
type ValueOrNestedArray<T> = T | ValueOrNestedArray<T>[];

type NumberArray = ValueOrArray<number>;
type NestedNumberArray = ValueOrNestedArray<number>;

const numberArray: NumberArray = [0, 1, [2]];
const nestedNumberArray: NestedNumberArray = [0, 1, [2, [3]]];

export {};
