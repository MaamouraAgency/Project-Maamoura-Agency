
import { Body, Controller,  Delete,  Get,Param,ParseIntPipe,Post, Put } from '@nestjs/common';
import { Place } from './places.entity';
import { PlacesService , PlaceInterface} from './places.service';

export interface PlaceTodo{
  id: number,
  Ref:string,
  pricePerDay:string,
  Description:string,
  Location:string,
  Image:string
}

@Controller('places')
export class PlacesController {
    constructor(private PlacesServices:PlacesService){}
    //get all places
  @Get()
  findAll() {
    return this.PlacesServices.getPlace()
}
@Get(':id')
findOne(@Param('id',ParseIntPipe)id){
  return this.PlacesServices.findOne(id)
}
@Post()
  async create(@Body() placeTodo: PlaceTodo) {
    const newPlace = this.PlacesServices.create(placeTodo); 
    return `Place with ID ${(await newPlace).id} has been added.`;
}
@Put(':id')
update(@Param('id') id: string, @Body() updateDto: any) {
  const newPlace:any = this.PlacesServices.update(id,updateDto)
  return `This place is updated `;
}
@Delete(':id')
async remove(@Param('id') id: string) {
  await this.PlacesServices.remove(id);
  return "Deleted place";
}
}