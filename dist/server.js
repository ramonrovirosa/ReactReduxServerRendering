'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _index = require('./src/reducers/index');

var _index2 = _interopRequireDefault(_index);

var _App = require('./src/containers/App');

var _App2 = _interopRequireDefault(_App);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
    // Create a new Redux store instance
    var store = (0, _redux.createStore)(_index2.default);

    // Render the component to a string
    var html = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
    ));

    // Grab the initial state from our Redux store
    var preloadedState = store.getState();

    // Send the rendered page back to the client
    if (req.url === '/bundle.js') {
        res.sendFile(__dirname + '/bundle.js');
    } else {
        res.send(renderFullPage(html, preloadedState));
    }
}

function renderFullPage(html, preloadedState) {
    return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n    ';
}

app.listen(port, function () {
    console.log('App running at http://localhost:' + port);
});