var db = require('../db/config');
var bluebird = require('bluebird');
var url = require('url');

var User_Connection = require('../db/models/userConnection');

module.exports = {

  getFriendList: {
    get: function (req, res) {
      console.log('GETFRIENDLIST FUNCTION HAPPENED, url requested: ', req.url);

      var userId = url.parse(req.url).query.split('=')[1]; // url format: /friends/getFriendList?user_id=123
      
      // db.Message.findAll({include: [db.User]})
      //   .complete(function(err, results){
      //     // optional mapping step
      //     res.json(results);
      //   });
    },
    post: function (req, res) {
      // TODO: Fix, for some reason routes.js needs this here.
      res.status(400).send('Bad Request');
    }
  },

  searchMembers: {
    get: function (req, res) {
      console.log('SEARCHMEMBERS FUNCTION HAPPENED, url requested: ', req.url);
      // db.Message.findAll({include: [db.User]})
      //   .complete(function(err, results){
      //     // optional mapping step
      //     res.json(results);
      //   });
    },
    post: function (req, res) {
      // TODO: Fix, for some reason routes.js needs this here.
      res.status(400).send('Bad Request');
    }
  },

  addFriend: {
    get: function (req, res) {
      // TODO: Fix, for some reason routes.js needs this here.
      res.status(400).send('Bad Request');
    },
    post: function (req, res) {
      console.log('ADDFRIEND FUNCTION HAPPENED, url requested: ', req.url);

      var userId = url.parse(req.url).query.split('=')[1]; // url format: /friends/getFriendList?user_id=123
      var friendId = req.body.id;

      new User_Connection({user_id: userId, friend_user_id: friendId})
      .fetch().then(function(found) {
        if (found) {
          res.status(200).send('User already is your friend!');
        } else {
          console.log('FOUND IS THIS: ', found);


        }
      });

    }
  },

  removeFriend: {
    get: function (req, res) {
      // TODO: Fix, for some reason routes.js needs this here.
      res.status(400).send('Bad Request');
    },
    post: function (req, res) {
      console.log('REMOVEFRIEND FUNCTION HAPPENED, url requested: ', req.url);

      // db.User.findOrCreate({where: {username: req.body.username}})
      //   .complete(function(err, results){
      //     db.Message.create({
      //       userid: results[0].dataValues.id,
      //       text: req.body.message,
      //       roomname: req.body.roomname
      //     }).complete(function(err, results){
      //       res.sendStatus(201);
      //     });
      //   });
    }
  }

};

