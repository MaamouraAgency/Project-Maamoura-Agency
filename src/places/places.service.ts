import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './places.entity';

@Injectable()
export class PlacesService {
 
 
  constructor(
    @InjectRepository(Place)
    private readonly placeRepo: Repository<Place>,
  ) {}

  async getPlace(): Promise<Place[]> {
    return this.placeRepo.find();
  }
findOne(id:number): Promise<Place>{
  return  this.placeRepo.findOne({where:{id}});
}
}
