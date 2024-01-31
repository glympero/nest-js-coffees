import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  // Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit = 10, offset = 0 } = paginationQuery;
    console.log('limit', limit);
    console.log('offset', offset);
    // @Res() response
    //@Res gives access to the native response object from node
    // response.status(200).send('this is the coffees get request - node native');
    // return `this is the coffees get request. Limit: ${limit}. Offset: ${offset}`;
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    // return `this is the requested #${id}`;
    return this.coffeesService.findOne('' + id);
  }
  @Post()
  // @HttpCode(HttpStatus.GONE) // for sending custom status code - default (without this decorator would be 201)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    // return `this updates the requested #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    // return `this deletes the requested #${id}`;
  }
}
