const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('landing')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/login/signup', (req, res) => {
  res.render('signup')
})

module.exports = router
