import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { fromEventPattern } from 'rxjs';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('task_created')
  async handleUserCreated(data: any) {
    this.appService.handleUserCreated(data);
    console.log('User created: ', data);
  }
}
