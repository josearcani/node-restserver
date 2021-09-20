const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) => {
  // jwt no soporta promesas,creémos una
  return new Promise((resolve, reject) => {

    const payload = { uid };

    jwt.sign( payload, process.env.SECRET_PRIVATE_KEY, {
      expiresIn: '15m'
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject('Not possible to signature a new token');
      } else {
        resolve(token);
      }
    });
  })
}

module.exports = {
  generateJWT
}