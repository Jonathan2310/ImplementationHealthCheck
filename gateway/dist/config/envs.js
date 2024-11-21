"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environments = void 0;
require("dotenv/config");
const joi = require("joi");
const environmentSchema = joi.object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
}).unknown();
const { error, value } = environmentSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS?.split(","),
});
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const environmentVariables = value;
exports.environments = {
    port: environmentVariables.PORT,
    natsServers: environmentVariables.NATS_SERVERS,
};
//# sourceMappingURL=envs.js.map