/**
 * keyof:
 * 把物件型別的所有屬性名稱取出變成 union type
 * keyof 顧名思義就是把「物件型別（object type）」的 key 拿出來
 */

interface User {
  uid: number;
  name: string;
  balance: number;
}

// type KeyOfUser = 'uid' | 'name' | 'balance';
type KeyOfUser = keyof User;

/**
 * Exercise：寫一個 Utility Type 可以取得物件型別中所有屬性的 Keys
 * https://github.com/piotrwitek/utility-types/blob/master/src/utility-types.ts#L13
 */

type Keys<T extends object> = keyof T;

export {};
