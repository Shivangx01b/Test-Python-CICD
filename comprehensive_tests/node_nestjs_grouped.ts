import { Controller, Get, Post, Param, Module } from '@nestjs/common';
import axios from 'axios';

// Controller with prefix - should create grouped APIs
@Controller('api/v1')
export class UserControllerV1 {
  
  @Get('users')
  async getUsers() {
    // Expected full_path: /api/v1/users
    const response = await axios.get('https://external-api.com/users');
    return response.data;
  }

  @Post('users')
  async createUser() {
    // Expected full_path: /api/v1/users
    await axios.post('https://validation-api.com/users', {});
    return { status: 'created' };
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    // Expected full_path: /api/v1/users/:id
    return { id };
  }

  @Get('posts')
  async getPosts() {
    // Expected full_path: /api/v1/posts
    const response = await fetch('https://external-api.com/posts');
    return response.json();
  }
}

// Another controller with different prefix
@Controller('api/v2')
export class UserControllerV2 {
  
  @Get('users')
  async getUsers() {
    // Expected full_path: /api/v2/users
    return { version: 'v2' };
  }
}

// Controller without prefix (no grouping)
@Controller()
export class HealthController {
  
  @Get('health')
  getHealth() {
    // Expected full_path: /health
    return { status: 'healthy' };
  }

  @Get('status')
  getStatus() {
    // Expected full_path: /status
    return { status: 'ok' };
  }
}

@Module({
  controllers: [UserControllerV1, UserControllerV2, HealthController],
})
export class AppModule {}