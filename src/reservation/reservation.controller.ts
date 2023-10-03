import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ReservationService } from './reservation.service';

export interface ReservationToDo{
    id:number;
    Confirmation:boolean;
    Datestart:Date;
    Dateend:Date
}

@Controller('reservation')
export class ReservationController {
    constructor (private ReservationService:ReservationService){}
    @Get()
    findAll(){
        return this.ReservationService.getReservation();
    }
    @Get('id')
    findOne(@Param('id',ParseIntPipe)id){
    return this.ReservationService.findOne(id)
    }
    
    @Post()
    async create(@Body()reservationToDo:ReservationToDo){
        const newReservation=  this.ReservationService.create(reservationToDo);
        return `Reservation created with ID ${(await newReservation).id}`
    }
    @Put(':id')
    update(@Param('id') id:string,@Body() updateToDo:any){
        const newReservation:any = this.ReservationService.update(id,updateToDo)
        return 'this reservation is updated'
    }
    @Delete(':id')
    async remove(@Param('id') id:string){
        await this.ReservationService.remove(id)
        return `Reservation  Deleted`
    }
}
