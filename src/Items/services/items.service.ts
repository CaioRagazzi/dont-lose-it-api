import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from '../schemas/item.schema';
import { CreateItemDto } from '../dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private catModel: Model<Item>) {}

  async create(createCatDto: CreateItemDto): Promise<Item> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Item[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.catModel.findById(id).exec();
  }
}
