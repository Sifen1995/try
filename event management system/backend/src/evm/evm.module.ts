import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EvmService } from './evm.service';
import { EvmController } from './evm.controller';
import { Event, EventSchema } from '../Events/events.schema';
import { Category, CategorySchema } from '../Category/Category.schema';
import { Reservation, ReservationSchema } from '../Reservation/Reservation.schema';
import { UserModule } from 'src/User/User.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [EvmController],
  providers: [EvmService],
})
export class EvmModule {}
