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
         res.status(401).send()
       }
    })
    .catch(function (err) {
        // API call failed...
      res.status(500).send({message: unable to process request})
    })
  })
}
