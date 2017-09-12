/// <reference types="express" />
import * as express from 'express';
/**
 * The server.
 *
 * @class Server
 */
export declare class Server {
    app: express.Application;
    /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
    constructor();
    api(): any;
    /**
   * Configure application
   *
   * @class Server
   * @method config
   */
    private config();
    /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
    routes(): void;
}
