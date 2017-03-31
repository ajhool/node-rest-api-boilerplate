/* @flow */

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import helmet from 'helmet'

import routes from './routes'
import Constants from './config/constants'

import passport from 'passport'
import Auth0Strategy from 'passport-auth0'

/*
 * Configure Passport to use Auth0 strategy
 */

const strategy = new Auth0Strategy({
    domain:       process.env.AUTH0_DOMAIN,
    clientID:     process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:  process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile)
})

passport.use(strategy)

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})

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
