import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,

  // UsePipes,
  // ValidationPipe,
  // Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';
// @UsePipes(ValidationPipe) //class binding
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  // @UsePipes(ValidationPipe) //method binding
  @Public()
  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    // @Res() response
    //@Res gives access to the native response object from node
    // response.status(200).send('this is the coffees get request - node native');
    // return `this is the coffees get request. Limit: ${limit}. Offset: ${offset}`;
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
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
  update(
    @Param('id') id: string,
    @Body(/*ValidationPipe param binding */) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
    // return `this updates the requested #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    // return `this deletes the requested #${id}`;
  }
}
