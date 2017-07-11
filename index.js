const xattr = require('fs-xattr')

const path = '/media/lxw/Lixw/file_created_in_linux_2.txt'

let list = []
const attrs = {}

try {
  xattr.setSync(path, 'user.key', '2333333')
  xattr.setSync(path, 'user.author', 'juncai')
  console.log('set xattr success!')
} catch (e) {
  console.log('set xattr failed!')
}

try {
  list = xattr.listSync(path)
  list.map(attr => ([attr, xattr.getSync(path, attr).toString()])).forEach((arr) => {
    attrs[arr[0]] = arr[1]
  })
  console.log('list xattr success!')
  console.log('attrs-value: ', attrs)
} catch (e) {
  console.log('list xattr failed!')
}
