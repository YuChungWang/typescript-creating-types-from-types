/**
 * Generics (泛型):
 * 讓「型別」也變成一個「變數」，可以根據不同的情況套用不同的型別
 */

interface User {
  uid: number;
  name: string;
  balance: number;
}
const user: User = {
  uid: 12345,
  name: 'Charlie',
  balance: 1000,
};

interface Generics<T> {
  uid: number;
  name: string;
  balance: T;
}
const user2: Generics<number> = {
  uid: 12345,
  name: 'Charlie',
  balance: 1000,
};

/**
 * Generic Constraints（泛型限制):
 * 泛型就像一個型別為 any 的變數一樣，使用者愛帶什麼型別都可以，但可以透過 extends 來為它加上限制
 */

interface GenericsConstraints<T extends number | string> {
  uid: number;
  name: string;
  balance: T;
}
const user3: GenericsConstraints<number> = {
  uid: 12345,
  name: 'Charlie',
  balance: 1000,
};

/**
 * Generic Default Parameter (泛型參數的預設值)
 * 泛型參數的預設值的用法，類似於 JavaScript 函式的參數預設值一樣
 */

 interface GenericDefaultParameter<T extends string | number = number> {
  uid: number;
  name: string;
  balance: T;
}

// 沒有帶入型別參數的話，會套用預設值
const user4: GenericDefaultParameter = {
  uid: 12345,
  name: 'Charlie',
  balance: 1000,
};

export {};
