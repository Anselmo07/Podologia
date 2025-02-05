import { Schema, Document } from 'mongoose';

export const ImageSchema = new Schema(
  {
    title: { type: String, required: true },
    beforeUrl: { type: String, required: true },
    afterUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export interface Image extends Document {
  title: string;
  beforeUrl: string;
  afterUrl: string;
}