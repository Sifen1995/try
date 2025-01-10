import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Reservation extends Document {
    @Prop()
    event: string;

    @Prop()
    user: string;

    @Prop()
    reservationDate: Date;
    // Add other necessary fields
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
export type ReservationDocument = Reservation & Document;