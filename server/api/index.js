const { Router } = require('express')
const router = Router()
const packageSize = require('package-size')

router.get('/size/:keyword', function (req, res, next) {
  const keyword = req.params.keyword

  console.log(`keyword: ${keyword}`)

  packageSize(keyword).then((data) => {
    console.log(data)
    res.json(data)
  }).catch((error) => {
    console.error(error)
    res.json(new Error(error))
  })
})

module.exports = router
