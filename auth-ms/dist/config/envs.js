"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environments = void 0;
const joi = require("joi");
require("dotenv/config");
const environtmentSchema = joi.object({
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    JWT_SECRET: joi.string().required(),
}).unknown();
const { error, value } = environtmentSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS.split(',')
});
if (error) {
    throw new Error(`Invalid enviroment variables ${error}`);
}
const environmentVariables = value;
exports.environments = {
    natsServers: environmentVariables.NATS_SERVERS,
    jwtSecret: environmentVariables.JWT_SECRET
};
//# sourceMappingURL=envs.js.map