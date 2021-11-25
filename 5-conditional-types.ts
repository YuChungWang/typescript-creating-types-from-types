/**
 * Conditional Types
 * 在 TypeScript 中可以透過 extends 搭配三元運算子寫成判斷式
 * X extends Y ? T : F
 */

type T1 = 3 extends number ? 'yes' : 'no';
type T2 = number extends 3 ? 'yes' : 'no';

type T3 = 'MOPCON' extends string ? true : false;
type T4 = 'MOPCON' extends any ? true : false;

type T5 = 3 extends string ? 'T' : 'F';

export {};
