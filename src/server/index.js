let http = require('http');
let koa = require('koa');
let logger = require('koa-logger');
let router = require('koa-route');
let serve = require('koa-static');

let webpack = require('webpack');
let webpackMiddleware = require('koa-webpack-dev-middleware');
let webpackHotMiddleware = require('koa-webpack-hot-middleware');
let webpackConfig = require('../../webpack.config');

let app = koa();

let compiler = webpack(webpackConfig);

app.use(logger());
app.use(webpackMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(serve('./public'));

// Create HTTP Server
http.createServer(app.callback()).listen(3000);
console.log('Server listening on port 3000');

module.exports = app;