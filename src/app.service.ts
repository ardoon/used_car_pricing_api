import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to "Used Car Pricing API" app, go to /auth for starting or check out request.http files in each users or reports directories for get informed about APIs.';
  }
}
