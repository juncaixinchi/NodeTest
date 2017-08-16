const { readXattr, setXattr } = require('./src/xattr')

const filePath = './test/a.txt'

const write = (path, data) => {
  setXattr(path, data, (error, newData) => console.log('error:', error, 'data:', newData))
}

const read = (path) => {
  readXattr(path, (error, attr) => console.log('error:', error, 'data:', attr))
}

write(filePath, { a: 'a', b: 'b' })

// read(filePath)
