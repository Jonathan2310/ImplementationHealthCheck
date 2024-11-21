// config/envs.ts
import * as joi from "joi";
import "dotenv/config";

interface EnvironmentVariables {
    NATS_SERVERS: string[];
    JWT_SECRET: string;
}

const environtmentSchema = joi.object({
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    JWT_SECRET: joi.string().required(),
}).unknown();

const { error, value } = environtmentSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS.split(',')
});

if( error) {
    throw new Error(`Invalid enviroment variables ${error}`);
}
const environmentVariables: EnvironmentVariables = value

export const environments = {
    natsServers: environmentVariables.NATS_SERVERS,
    jwtSecret: environmentVariables.JWT_SECRET
}