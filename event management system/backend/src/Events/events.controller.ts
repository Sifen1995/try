import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { EventService } from './events.service';  // Ensure correct path
import { CreateEventDto, UpdateEventDto } from './dto/events.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../admin/auth/roles.decorator'; 
import { RolesGuard } from '../admin/auth/roles.guard';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @Roles('admin')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return await this.eventService.create(createEventDto);
  }

  @Get(':id')
  async getEvent(@Param('id') id: string) {
    return await this.eventService.findOne(id);
  }

  @Get()
  async getAllEvents() {
    return await this.eventService.findAll();
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return await this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteEvent(@Param('id') id: string) {
    return await this.eventService.delete(id);
  }
}
