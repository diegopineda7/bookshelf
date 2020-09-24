const multer = require('multer')

const storageImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/img')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`)
  }
})
const uploadImg = multer({ storage: storageImg })

const storagePdf = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/pdf')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.pdf`)
  }
})
const uploadPdf = multer({ storage: storagePdf })

module.exports = {
  uploadImg,
  uploadPdf
}
