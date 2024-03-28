const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Cabeza!')
})

app.listen(port, () => {
   console.log(`con console log Change Listening on port ${port}`)
})