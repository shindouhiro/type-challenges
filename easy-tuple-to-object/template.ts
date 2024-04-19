type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}




//js 
function tupleToObject(arr) {
  let result = {}
  arr.forEach(key => {
    result[key] = key
  })
  return result
}

// 返回对象
// 遍历数组
