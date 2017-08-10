const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const xattr = Promise.promisifyAll(require('fs-xattr'))

const path = './test/a.txt'
console.log('path is ', path)

let list = []
const attrs = {}

try {
  xattr.setSync(path, 'user.fruitmix', 'ccc')
  xattr.setSync(path, 'user.author', 'cc')
  console.log('set xattr success!')
} catch (e) {
  console.log('set xattr failed!', e)
}

try {
  list = xattr.listSync(path)
  list.map(attr => ([attr, xattr.getSync(path, attr).toString()])).forEach((arr) => {
    attrs[arr[0]] = arr[1]
  })
  console.log('list xattr success!')
  console.log('attrs-value: ', attrs)
} catch (e) {
  console.log('list xattr failed!', e)
}
