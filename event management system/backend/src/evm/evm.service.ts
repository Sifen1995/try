import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from '../Events/events.schema';
import { Category, CategoryDocument } from '../Category/Category.schema';
import { Reservation, ReservationDocument } from '../Reservation/Reservation.schema';
import { User } from '../User/schemas/User.schema'; 

@Injectable()
export class EvmService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Event.name) private eventModel: Model<EventDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
        @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
    ) {}

    // Add methods for CRUD operations
    async createUser(createUserDto: any): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async createEvent(createEventDto: any): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }

    async createCategory(createCategoryDto: any): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async createReservation(createReservationDto: any): Promise<Reservation> {
        const createdReservation = new this.reservationModel(createReservationDto);
        return createdReservation.save();
    }

    // Add other necessary methods for querying and updating documents
}
