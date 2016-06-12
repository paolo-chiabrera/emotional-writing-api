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
          reply(sentiment(request.query.text || ''));
        }
    });

    next();
};


exports.register.attributes = {
    name: 'api'
};
