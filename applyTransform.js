const Transform = require('./transform')

const first = new Transform({
  name: 'first',
  transform: (x, callback) => {
    const a = x.value * x.value
    console.log('first', x, a)
    callback(null, { value: a })
  }
})

const second = new Transform({
  name: 'second',
  transform: (x, callback) => {
    const a = x.value * 2
    console.log('second', a)
    callback(null, { value: a })
  }
})

const third = new Transform({
  name: 'third',
  transform: (x, callback) => {
    const a = x.value + 7
    console.log('third', a)
    callback(null, { value: a })
  },
  isBlocked: () => false
})

first.pipe(second).pipe(third)
first.push({ value: 9 })
second.push({ value: 5 })
first.push({ value: 100 })
setTimeout(() => first.print(), 500)
setTimeout(() => first.print(), 3000)
setTimeout(() => console.log(first.isStopped()), 1100)

/*
let third = new Transform({
  spawn: {
    name: 'dirwalk',
    transform: function (x, callback) {
      fs.readdir(path.join(src, x.path), (err, entries) => {
        if (err || entries.length === 0) {
          if (err) {
            callback(err)
          } else {
            callback(null, { path: x.path, files: [] })
          }
        } else {
          let count = entries.length
          let files = []
          entries.forEach(entry => {
            fs.lstat(path.join(src, x.path, entry), (err, stat) => {
              if (err) {
                // TODO
              } else {
                if (stat.isDirectory()) {
                  this.unshift({ path: path.join(x.path, entry) })
                } else if (stat.isFile()) {
                  files.push(entry)
                } else {
                  // TODO
                }
              }

              if (!--count) callback(null, { path: x.path, files })
            })
          })
        }
      })
    }
  }
})

dirwalk.pipe(mkTmpDir).pipe(mkDstDir).pipe(dircopy)
*/
