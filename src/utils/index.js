// 数据缓存
export function createCache (count) {
  var cache = {}
  var index = []
  return function (key, value) {
    if (value !== undefined) {
      // 将数据存入cache对象，做缓存
      cache[key] = value
      index.push(key)
      // 判断缓存中的数据数量是不是超出了限制
      if (index.length >= count) {
        // 使用数组的shift方法可以获取并删除掉数组的第一个元素
        var tempKey = index.shift()
        // 获取到最早加入缓存的这个数据的键，可以使用它将数据从缓存各种删除
        delete cache[tempKey]
      }
    }
    return cache[key]
  }
}

// 列表转为数结构
export function listtotree (pmenu, selfnode, prentnode, parentvalue, sortnode) {
  let tmenu = pmenu.filter(function (parent) {
    var branchArr = pmenu.filter(function (child) {
      return parent[selfnode] === child[prentnode]
    })
    parent.children = []
    if (branchArr.length > 0) {
      if (sortnode) branchArr.sort((a, b) => a[sortnode] - b[sortnode])
      parent.children = branchArr
    }
    return parent[prentnode] === parentvalue
  })
  if (sortnode) tmenu.sort((a, b) => a[sortnode] - b[sortnode])
  return tmenu
}

export const getUUID = () => {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
  return uuid
}
