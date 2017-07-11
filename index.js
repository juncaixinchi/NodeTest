const xattr = require('fs-xattr')

const path = './test/a.txt'

let list = []
const attrs = {}

xattr.setSync(path, 'user.key', '233')
xattr.setSync(path, 'user.author', 'lxw')

list = xattr.listSync(path)

list.map(attr => ([attr, xattr.getSync(path, attr).toString()])).forEach((arr) => {
  attrs[arr[0]] = arr[1]
})
console.log(attrs)
