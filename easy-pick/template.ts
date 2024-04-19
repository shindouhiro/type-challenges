type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}



//js
//对比学习法
function myPick(todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}
//对象
//遍历
//todo[key]取值
//在todos中


