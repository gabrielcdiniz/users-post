import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsBoolean,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsMongoId({
    message: 'the informed property $property must be a valid mongo id',
  })
  id: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsInt()
  @IsOptional()
  age: number;

  @Prop({ default: true })
  @IsBoolean()
  @IsOptional()
  active: boolean;

  // @Prop()
  // role: string;

  // @Prop()
  // createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
