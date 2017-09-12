'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const errorHanlder = require("errorhandler");
const express = require("express");
const http = require("http");
const logger = require("morgan");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    api() {
        const port = process.env.PORT || 8080;
        this.app.set('port', port);
        const server = http.createServer(this.app);
        server.listen(port, (err) => {
            if (err) {
                return console.log(err);
            }
            return console.log(`server is listening on http://localhost:${port}`);
        });
    }
    /**
   * Configure application
   *
   * @class Server
   * @method config
   */
    config() {
        //use logger middleware
        this.app.use(logger('dev'));
        //use json form parser middleware
        this.app.use(bodyParser.json());
        //use query string parser middleware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHanlder());
    }
    /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
    routes() {
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map