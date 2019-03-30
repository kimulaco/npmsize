const { Router } = require('express')
const router = Router()
const NpmAnalyse = require('../lib/npm-analyse')
const Consoler = require('../lib/consoler')
const npmAnalyse = new NpmAnalyse()
const consoler = new Consoler()

router.get('/size/:keyword', function (req, res, next) {
  const keyword = req.params.keyword
  const packageName = keyword.split(/,/g)

  consoler.success('keyword', keyword)

  npmAnalyse.size(packageName).then((data) => {
    consoler.success('packageSize()', data)
    res.json(data)
  }).catch((error) => {
    consoler.alert('packageSize()', error)
    res.json(new Error(error))
  })
})

module.exports = router
