/**
 * Mapped Type（映射型別)
 * 如果你想沿用或修改既有的物件型別來建立新型別，又不想重複撰寫程式碼
 * 就可以使用 Mapped Type
 * Mapped Types 會搭配關鍵字 in 使用，非常強大，可以跑類似迴圈的功能。
 */

interface User {
  uid: number;
  name: string;
  balance: number;
}
type MappedUser = {
  [K in keyof User]: User[K];
};

/**
 * 修改所有物件型別的屬性 Value
 */
type T1 = {
  [K in keyof User]: string;
};

/**
 * 搭配關鍵字 as 修改所有物件型別的屬性 Key
 */
type T2 = {
  [K in keyof User as `changed${K}`]: User[K];
};

/**
 * Exercise：寫一個 Utility Type 可以取出物件型別中的部分屬性。
 * 例如，只要取出 Conference 型別中的 name 和 price 屬性
 */

type PickObj<T, K extends keyof T> = {
  [Property in K]: T[Property];
}

export {};
