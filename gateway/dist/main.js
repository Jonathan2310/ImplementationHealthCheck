"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
const rpc_exception_filter_1 = require("./common/exception/rpc-exception-filter");
async function bootstrap() {
    const logger = new common_1.Logger("GATEWAY");
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    app.useGlobalFilters(new rpc_exception_filter_1.RpcCustomExceptionFilter());
    await app.listen(config_1.environments.port);
    logger.log(`Gateway running on port ${config_1.environments.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map