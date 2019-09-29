/// <reference types="node" />
import { Server as HttpServer } from "https";
import { WebAppRpcProtocol } from "@bentley/imodeljs-common";
/**
 * An express web server with some reasonable defaults for web applications built with @bentley/webpack-tools.
 * @note This server is not designed to be a hardened, secure endpoint on the public internet.
 *       It is intended to participate in a private HTTP exchange with a public-facing routing and provisioning infrastructure
 *       that should be supplied by the application's deployment environment.
 * @public
 */
export declare class IModelJsExpressServer {
    private _protocol;
    protected _app: import("express").Application;
    constructor(protocol: WebAppRpcProtocol);
    protected _configureMiddleware(): void;
    protected _configureHeaders(): void;
    protected _configureRoutes(): void;
    /**
     * Configure the express application with necessary headers, routes, and middleware, then starts listening on the given port.
     * @param port The port to listen on
     * @param keyLoc Directory of SSL key
     * @param certLoc Directory of SSL certificate
     * @param pass Passphrase of SSL
     */
    initialize(port: number | string, keyLoc: string, certLoc: string, pass: string): Promise<HttpServer>;
}
//# sourceMappingURL=ExpressServer.d.ts.map