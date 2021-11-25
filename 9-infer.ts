/**
 * Infer
 * 只能在 Conditional Types 中的 extends 被使用
 * 推導出來的型別 R 只能用在符合 True 的條件使用
 */

type Infer<T> = T extends (infer R)[] ? R : T;

type T1 = Infer<string[]>;
type T2 = Infer<boolean>;

//

type InferResp<T> = T extends { status: string, msg: string, response: infer R } ? R : T;

const successResp = { status: 'success', msg: '', response: { uid: 12345 }};
const errorResp = { status: 'success', msg: '' };

type T3 = InferResp<typeof successResp>; // { data: string }
type T4 = InferResp<typeof errorResp>; // { status: number }

export {};
