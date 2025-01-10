import { Module } from '@nestjs/common';
import { EventController } from './Events.controller';
import { EventService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './events.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]), // Ensure Event schema is registered here
  ],
  controllers: [EventController],  // Add the controller here
  providers: [EventService],  // Add the service here to make it injectable
})
export class EventModule {}
