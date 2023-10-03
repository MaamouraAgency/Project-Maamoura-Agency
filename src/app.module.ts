// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { Place } from './places/places.entity'; 
import { Reservation } from './reservation/reservation.entity';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dhia',
      password: '@Dhia12345@*',
      database: 'immo',
      entities: [Place,Reservation], 
      migrations:[Place,Reservation],
      synchronize: true,
    }),
    PlacesModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
