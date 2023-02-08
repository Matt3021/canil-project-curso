import express, { Request, Response } from 'express'
import path from 'path'

import mustache from 'mustache-express'
import mainRoutes from './routes/index'

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustache())

app.use(mainRoutes)

app.listen(3000)