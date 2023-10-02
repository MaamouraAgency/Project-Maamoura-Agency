import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './places.entity';

export interface PlaceInterface{
  id: number,
  Ref:string,
  pricePerDay:string,
  Description:string,
  Location:string,
  Image:string
}

@Injectable()
export class PlacesService {
  delete: any;

  constructor(
    @InjectRepository(Place)
    private placeRepo: Repository<PlaceInterface>,
  ) {}

   getPlace(): Promise<PlaceInterface[]> {
    return this.placeRepo.find();
  }
findOne(id:number): Promise<PlaceInterface>{
  return  this.placeRepo.findOne({where:{id}});
}
create(Place:PlaceInterface):Promise<PlaceInterface>{
return this.placeRepo.save(
  this.placeRepo.create(Place)
)
}
update(id:string,data:any):Promise<any>{
return this.placeRepo
.createQueryBuilder()
.update()
.set({
  Ref : data.Ref ,
  pricePerDay:data.pricePerDay,
  Description:data.Description,
  Location:data.Location,
  Image:data.Image
})
.where('id=:id',{id})
.execute()
}
async remove(id: string): Promise<void> {
  const deleteResult = await this.placeRepo.delete(id);

  if (deleteResult.affected === 0) {
    throw new NotFoundException(`Place with ID ${id} not found`);
  }
}

}

