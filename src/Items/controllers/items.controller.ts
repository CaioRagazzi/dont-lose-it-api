import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { FindOneParams } from '../dto/find-one.dto';
import { Item } from '../schemas/item.schema';
import { ItemsService } from '../services/items.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('items')
export class ItemsController {

  constructor(private itemsService: ItemsService){  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemsService.create(createItemDto);
    return newItem;
  }

  @Get()
  async findAll(): Promise<Item[]> {    
    const items = this.itemsService.findAll();
    return items;
  }

  @Get('/:id')
  async findOne(@Param() param: FindOneParams): Promise<Item> {
    const item = this.itemsService.findOne(param.id);
    return item;
  }
}