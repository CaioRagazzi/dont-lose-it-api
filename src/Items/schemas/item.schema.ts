import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  hourRemind: string;

  @Prop()
  dateRemind: string;

  @Prop()
  type: number;

  @Prop()
  notes: string;

  @Prop()
  latLng: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);