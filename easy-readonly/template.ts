type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}


//js

function myReadOnly(obj) {
  const result = {}
  for (let key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}

// 等于object
// 遍历
// readonly
// 通过key取obj值
