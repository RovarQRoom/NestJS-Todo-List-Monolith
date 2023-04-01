import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'tasks_queue',
      prefetchCount: 1,
      noAck: false,
      queueOptions: {
        name: 'RabbitMQService',
        type: 'direct',
        durable: true,
      },
    },
  });
  await app.listen();
}
bootstrap();
