var app = require('../myServer');
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {

  createToken: function(req, res, userModel) {
    var expires = moment().subtract(7, 'days').valueOf();
    var token = jwt.encode({
      iss: userModel.attributes.id,
      name: userModel.attributes.first_name,
      exp: expires
    }, app.app.get('jwtTokenSecret'));

    res.status(200).json({
      token : token,
      expires: expires,
      user: userModel.toJSON()
    });
  }

};