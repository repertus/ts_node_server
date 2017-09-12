'use strict'

import * as bodyParser from 'body-parser'
import * as errorHanlder from 'errorhandler'
import * as express from 'express'
import * as http from 'http'
import * as logger from 'morgan'


/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application

    /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
    constructor() {
        this.app = express()
        
        this.config()
        this.routes()
        this.api()
    }

    public api(): any {
        const port: any = process.env.PORT || 8080

        this.app.set('port', port)

        const server: any = http.createServer(this.app)

        server.listen(port, (err) => {
        if (err) {
            return console.log(err)
        }

            return console.log(`server is listening on http://localhost:${port}`)
        })
    }

    /**
   * Configure application
   *
   * @class Server
   * @method config
   */
    private config(): void {
        //use logger middleware
        this.app.use(logger('dev'))

        //use json form parser middleware
        this.app.use(bodyParser.json())

        //use query string parser middleware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }))

        //catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404
            next(err)
        })

        //error handling only to be used in development
        if (process.env.NODE_ENV === 'development') {
            this.app.use(errorHanlder())
        } 
    }

    /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
    public routes(): void {

    }
}