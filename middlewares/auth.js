/* Const Library */
const logger = require('./../libs/loggerLib')
const response = require('./../libs/responseLib')


let isAuthenticated = (req, res, next) => {
  if (req.params.authToken || req.query.authToken || req.header('authToken')) {
    if(req.params.authToken=="MGQwOTE5YWEyZTQ1NGI4ZDNhMmNjNDY3YmNjNmQxMGY1OGFkZWZiZGZiYzM1MjIxZmExMjhhMGZiMjRkNDUxOTgwYmZhYzYyYzVjMzc5NjFjMWMzNzM2ZjhiOGViNWRjNWZkYTg5ZmFmZWFlOGExM2UwNzY2NzMyNGI2MDAzN2JlNw==" || req.query.authToken=="MGQwOTE5YWEyZTQ1NGI4ZDNhMmNjNDY3YmNjNmQxMGY1OGFkZWZiZGZiYzM1MjIxZmExMjhhMGZiMjRkNDUxOTgwYmZhYzYyYzVjMzc5NjFjMWMzNzM2ZjhiOGViNWRjNWZkYTg5ZmFmZWFlOGExM2UwNzY2NzMyNGI2MDAzN2JlNw==" || req.header('authToken')=="MGQwOTE5YWEyZTQ1NGI4ZDNhMmNjNDY3YmNjNmQxMGY1OGFkZWZiZGZiYzM1MjIxZmExMjhhMGZiMjRkNDUxOTgwYmZhYzYyYzVjMzc5NjFjMWMzNzM2ZjhiOGViNWRjNWZkYTg5ZmFmZWFlOGExM2UwNzY2NzMyNGI2MDAzN2JlNw=="){
      req.user = {fullName:'Saiteja',userId:'Malaga'}
      next();
    }
    else{
      logger.error('Incorrect authentication token', 'Authentication Middleware', 5)
      let apiResponse = response.generate(true, 'Incorrect authentication token', 403, null)
      res.send(apiResponse)
    }
  } else {
    logger.error('Authentication Token Missing', 'Authentication Middleware', 5)
    let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null)
    res.send(apiResponse)
  }
}



module.exports = {
  isAuthenticated: isAuthenticated
}
