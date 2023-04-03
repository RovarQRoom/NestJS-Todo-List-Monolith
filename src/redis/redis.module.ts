import {CACHE_MANAGER ,CacheModule, Inject, Logger, Module, OnModuleInit } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { Cache } from 'cache-manager';
import { RedisCacheService } from './service/redis/redis.service';

//Using Redis As Cache
@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: async () => {
                return {
                    store: redisStore,
                    host: "127.0.0.1",
                    port: 6379,
                    ttl: 60*3600*1000, // seconds
                };
            },
        })
    ],
    providers: [RedisCacheService],
    exports: [RedisModule,RedisCacheService],
})
export class RedisModule implements OnModuleInit {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

    public onModuleInit(): any {
        const logger = new Logger('Cache');
    }
}
