'use strict';

const sentiment = require('sentiment');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the Sentiment API.' });
        }
    });

    server.route({
        method: 'GET',
        path: '/sentiment',
        handler: function (request, reply) {

          let data = null;

          try{
            data = sentiment(request.query.text || '');
          } catch(e){
            data = {
              error: e
            };
          }

          reply(data);
        }
    });

    next();
};


exports.register.attributes = {
    name: 'api'
};
