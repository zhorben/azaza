import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import Debug from 'debug'
import serveStatic from 'serve-static'
import webpackServer from './config/webpack.server'
import morgan from 'morgan'
import session from 'express-session'
import db from './config/knex'
import KnexSessionStore from 'connect-session-knex'
import history from 'connect-history-api-fallback'

import auth from './router/auth'

// const SessionStore = KnexSessionStore(session)
// const store = new SessionStore({
//   knex: db,
//   tablename: 'session'
// })

const debug = Debug('server:app')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(history());
app.use(serveStatic(path.join(__dirname, '..', 'dist')))

webpackServer(app)

// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true,
//   store: store
// }))


// app.use('/api/auth', auth)

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))
