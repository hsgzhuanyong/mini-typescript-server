
import express from 'express'
// 自定义模块
import { systemConfig } from './config'
const app = express()

app.get('/', (req, res) => {
  res.send('11')
})

app.listen(systemConfig.port, () => {
  console.log(`the server is start at port ${systemConfig.port}`);
});