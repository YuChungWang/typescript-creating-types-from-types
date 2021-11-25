/**
 * typeof:
 * 後面接的是宣告的變數
 */

const user = {
  uid: 12345,
  name: 'Charlie',
  balance: 1000,
}

type T1 = typeof user;
type T2 = keyof typeof user;

export {};
