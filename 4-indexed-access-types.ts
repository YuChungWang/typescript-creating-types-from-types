/**
 * Indexed Access Types:
 * 像 JavaScript 中使用中括號 [] 一樣，可以取得物件型別中的特定屬性值
 */

interface User {
  uid: number;
  name: string;
  balance: number;
}

type T1 = User['uid'];
type T2 = User['uid' | 'name'];

/**
 * 或使用 Union Types 取得多個屬性值的型別
 */

type T3 = User[keyof User];

/**
 * Exercise: 寫一個 Utility Type 可以取得所有物件型別的屬性值(value)
 * https://github.com/piotrwitek/utility-types/blob/master/src/utility-types.ts#L25
 */

type Values<T extends object> = T[keyof T];

export {};
