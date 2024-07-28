import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

//   @Get()
//   getDefault(): string {
//     return 'Hello';
//   }

  @Get('health-check')
  getHealth(): string {
    return 'Application is working..!!!';
  }
}
