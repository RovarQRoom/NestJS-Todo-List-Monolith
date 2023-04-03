import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { AccessTokenGuard } from './common/guards/accessToken.guard';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Rovar2000:900mylife@typescripttraning.ld9ug60.mongodb.net/?retryWrites=true&w=majority"),
    UsersModule,
    RabbitMQModule,
    RedisModule,
    AuthModule
  ],
  controllers: [],
  providers: [{
    provide: 'APP_GUARD',
    useClass: AccessTokenGuard,
  }],
})
export class AppModule {
}
