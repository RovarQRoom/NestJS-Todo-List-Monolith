import { Injectable } from '@nestjs/common';
import { TasksCreated } from './Event/task.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: TasksCreated) {
    console.log('handleTaskCreated: RabbitMQMessage', data);
  }
}
