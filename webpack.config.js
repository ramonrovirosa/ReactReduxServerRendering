var path = require('path');

module.exports = {
    entry: './dist/src/client.js',
    output: {
        filename: 'bundle.js',
        path:  path.resolve( __dirname, 'dist/')
    }
};