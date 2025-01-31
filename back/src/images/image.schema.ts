import { Schema, Document } from 'mongoose';

// Definir el esquema con el decorador @Schema() si es necesario.
import { Prop, Schema as SchemaDecorator, SchemaFactory } from '@nestjs/mongoose';

// Usar decoradores de NestJS para definir la estructura
@SchemaDecorator()
export class Image extends Document {
  @Prop({ required: true })
  url: string;
}

// Crear el esquema a partir de la clase decorada
export const ImageSchema = SchemaFactory.createForClass(Image);

