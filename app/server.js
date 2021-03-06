/* @flow */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'

import routes from './routes'
import Constants from './config/constants'

const app = express()

//Configure authentication middleware
app.use(passport.initialize())
app.use(passport.session())

// Helmet helps you secure your Express apps by setting various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet())

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors())

// Request logger
// https://github.com/expressjs/morgan
if (!Constants.envs.test) {
  app.use(morgan('dev'))
}

// Parse incoming request bodies
// https://github.com/expressjs/body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Lets you use HTTP verbs such as PUT or DELETE
// https://github.com/expressjs/method-override
app.use(methodOverride())

// Mount API routes
app.use(Constants.apiPrefix, routes)

app.listen(Constants.port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    Port: ${Constants.port}
    Env: ${app.get('env')}
  `)
})

export default app
