const fs = require('fs')
const FTP = require('ftp')

const filePath = 'wisnuc_update/wisnuc-desktop-mac-releases'
const fileName = filePath.replace(/.*\//, '')
const c = new FTP()
c.on('ready', () => {
  c.get(filePath, (err, stream) => {
    if (err) throw err
    console.log(fileName)
    stream.once('close', () => { c.end() })
    stream.pipe(fs.createWriteStream(fileName))
  })
})
const op = {
  host: '120.27.108.153',
  port: 83,
  user: 'download',
  password: 'qyeTQMq2DzHAtvHO'
}
c.connect(op)
