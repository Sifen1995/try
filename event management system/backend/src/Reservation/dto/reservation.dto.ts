import { IsNotEmpty, IsString, IsDate,IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  eventId: string;

  @IsNotEmpty()
  @IsDate()
  reservationDate: Date;
}

export class UpdateReservationDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  eventId?: string;

  @IsOptional()
  @IsDate()
  reservationDate?: Date;
}
