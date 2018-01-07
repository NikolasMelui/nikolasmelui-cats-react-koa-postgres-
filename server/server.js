const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')()
const redis = require('redis')
const bluebird = require('bluebird')
const _ = require('lodash')

bluebird.promisifyAll(redis.RedisClient.prototype)
const db = redis.createClient()

const server = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = '!!!!'
})

// router.post('/story', bodyParser, async ctx => {
//   await db.setAsync('FirstKey', 'FirstValue')
//   ctx.body = { data: ctx.request.body }
// })

router.get('/story', ctx => {
  ctx.body = "Hello!!!"
})

server.use(logger('dev')).use(router.routes()).listen(3001)