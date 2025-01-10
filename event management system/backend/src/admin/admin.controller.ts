// src/admin/admin.controller.ts
import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AdminService } from './admin.service';
import { RolesGuard } from './auth/roles.guard';
import { SetMetadata } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const admin = await this.adminService.findAdminByEmail(loginDto.email);
    if (!admin || !(await this.authService.validateAdmin(admin, loginDto.password))) {
      return { message: 'Invalid credentials' };
    }
    const token = await this.authService.generateToken(admin);
    return { token };
  }

  @Post('register')
  async register(@Body() body: { email: string; password: string; name: string }) {
    try {
      const result = await this.adminService.register(body.email, body.password, body.name);
      return result;
    } catch (error) {
      return { message: error.message };
    }
  }

  @UseGuards(RolesGuard)
  @SetMetadata('role', 'admin')
  @Get('dashboard')
  getAdminDashboard(@Req() req) {
    return { message: `Welcome ${req.user.email}` };
  }
}
