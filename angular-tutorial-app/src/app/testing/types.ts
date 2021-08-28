
// type PPP = 'a' | 'b' | 'c';

// type Test = {

//   a: boolean;
//   b: string;
//   c: number;
// };
// type TTT = {
//   [P in PPP]?: string
// }

// type TTG<PP extends string|number|symbol> = {
//   [P in PP]?: string
// }
// const a: TTT = {a: '1', c: '2'};

// type TTT2<PPP> = {
//   readonly [P in keyof PPP]: PPP[P] | null;
// }

// const b: TTT2<{a: 'a', b: 'b'}>;

// type MyPick<T, Properties extends keyof T> = {
//   [P in Properties]: T[P]
// };

// const x: MyPick<Test, 'a'|'c'>;
// let a : Record<string, number>;

// type ExtendWithId<T extends string|number|symbol> = {
//   [P in keyof T ]: T[P];
// };
