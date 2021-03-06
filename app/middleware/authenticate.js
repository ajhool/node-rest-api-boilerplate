/* @flow */

import Constants from '../config/constants'
import requestPromise from 'request-promise'

/*
 * Performs a get request to the user store to check the Authorization header and retrieve the userId.
 */

export default function authenticate(req, res, next) {
  const { authorization } = req.headers

  const options = {
    uri: Constants.userStore.url,
    headers: {
        'User-Agent': 'Request-Promise',
        'Authorization': authorization
    },
    json: true // Automatically parses the JSON string in the response
  }

  requestPromise(options)
    .then(function (user) {
        if(user){
         req.currentUser = user
         next()
        } else {
          const err = {status: 500}
          next(err)
        }
    })
    .catch(function (err) {
      err.status = 500
      next(err)
    })
}
