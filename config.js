'use strict';

const Confidence = require('confidence');


const criteria = {
    env: process.env.NODE_ENV
};

const port = 9040;

const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'emotionalWriting',
    port: {
        api: {
            $filter: 'env',
            prod: process.env.NODE_PORT || port,
            dev: process.env.NODE_PORT || port,
            test: 9090,
            $default: port
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
