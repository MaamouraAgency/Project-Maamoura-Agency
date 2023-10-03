import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

export interface ReservationInterface{
id:number,
Confirmation:boolean,
Datestart:Date,
Dateend:Date,
}
@Injectable()
export class ReservationService {

    constructor(
        @InjectRepository(Reservation) 
        private  reservationRepo : Repository<ReservationInterface>,
        ){}

    getReservation():Promise<ReservationInterface[]> {
        return this.reservationRepo.find()
    }
    findOne(id: number):Promise<ReservationInterface> {
return this.reservationRepo.findOne({where:{id}})    }
create(Reservation: ReservationInterface):Promise<ReservationInterface> {
return this.reservationRepo.save(
    this.reservationRepo.create(Reservation)
)}
update(id: string,data:any):Promise<any> {
return this.reservationRepo
.createQueryBuilder()
.update()
.set({
    Confirmation:data.Confirmation,
    Datestart:data.Datestart,
    Dateend:data.Dateend
})
.where('id=:id',{id})
.execute()
}
async remove(id: string):Promise<void> {
const deleteResult=await this.reservationRepo.delete(id)
if(deleteResult.affected===0){
    throw new NotFoundException(`Reservation with ID ${id} not found`)
}
}
    }
