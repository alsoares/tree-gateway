'use strict';

import { BasicStrategy } from 'passport-http';
import { Container } from 'typescript-ioc';
import { BasicAuthentication, validateBasicAuthConfig } from '../../../config/authentication';
import { MiddlewareLoader } from '../../../utils/middleware-loader';

module.exports = function (authConfig: BasicAuthentication) {
    validateBasicAuthConfig(authConfig);
    const middlewareLoader: MiddlewareLoader = Container.get(MiddlewareLoader);
    const verifyFunction = middlewareLoader.loadMiddleware('authentication/verify', authConfig.verify);
    return new BasicStrategy(verifyFunction);
};
module.exports.factory = true;
