
import { Body, Controller,  Get,Param,ParseIntPipe,Post } from '@nestjs/common';
import { Place } from './places.entity';
import { PlacesService } from './places.service';

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
}