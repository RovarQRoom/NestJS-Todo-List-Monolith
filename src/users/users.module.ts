import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users ,UsersSchema } from '../Model/UsersModel';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { UsersRepository } from './repository/users/users.repository';
import { AuthService } from '../auth/service/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from '../auth/repository/auth.repository';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';
import { RedisModule } from 'src/redis/redis.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        JwtModule.register({}),
        MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
        RedisModule,
        RabbitMQModule,
        HttpModule
    ],
    controllers: [UsersController], // provide UsersController To Use It In This Module
    providers: [UsersService,UsersRepository,AuthService,AuthRepository], // provide UsersService To Use It In This Module
    exports: [UsersService] // Export UsersService To Use It In Other Modules
})
export class UsersModule {}
