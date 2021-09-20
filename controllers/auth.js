const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const { generateJWT } = require('../helpers/generate-jwt');

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  
  try {
    
    // verificar que el email existe

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        msg: 'email or password - email'
      })
    }

    // Si la cuenta de usuario esta ACTIVO
    if (!user.state) {
      return res.status(400).json({
        msg: 'email or password - state:false'
      })
    }

    // verificar la contraseña
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'email or password - password'
      })
    }

    // generar un JWT
    const token = await generateJWT( user.id );
    res.json( {
      user,
      token
    } )

  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Talk to the administrador'
    })
  }
}

module.exports = {
  login,
}