import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './Reservation.schema';
import { CreateReservationDto, UpdateReservationDto } from './dto/reservation.dto';

@Injectable()
export class ReservationService {
  constructor(@InjectModel(Reservation.name) private readonly reservationModel: Model<Reservation>) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const newReservation = new this.reservationModel(createReservationDto);
    return newReservation.save();
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }

  async findOne(id: string): Promise<Reservation> {
    const reservation = await this.reservationModel.findById(id).exec();
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  async update(id: string, updateReservationDto: UpdateReservationDto): Promise<Reservation> {
    const updatedReservation = await this.reservationModel.findByIdAndUpdate(id, updateReservationDto, { new: true }).exec();
    if (!updatedReservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return updatedReservation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.reservationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
  }
}
