//1. type First<T extends any[]> = T extends [] ? never : T[0]
//2.type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
//3.
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
//4. type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


//js
function fist(arr) {
  // if (arr.length == 0) return 'never'
  // return arr[0]
  const [first, ...rest] = arr
  first ? first : 'never'
}
