
const express = require('express')
const app = express()
const path = require('path')

const port = 8080

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.get('/health-check', (req, res) => {
  res.send('Application is working..!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


