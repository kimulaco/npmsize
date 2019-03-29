const { Router } = require('express')
const router = Router()
const packageSize = require('package-size')
const Consoler = require('../lib/consoler')
const consoler = new Consoler()

router.get('/size/:keyword', function (req, res, next) {
  const keyword = req.params.keyword

  consoler.success('keyword', keyword)

  packageSize(keyword).then((data) => {
    consoler.success('packageSize()', data)
    res.json(data)
  }).catch((error) => {
    consoler.alert('packageSize()', error)
    res.json(new Error(error))
  })
})

module.exports = router
