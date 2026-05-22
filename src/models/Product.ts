import mongoose, { Schema } from 'mongoose';
import { IProduct, IReview } from '../types/index';

const reviewSchema = new Schema<IReview>(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const productSchema = new Schema<IProduct>(
  {
    sellerId: {
      type: String,
      required: [true, 'Seller ID is required'],
      index: true,
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [200, 'Product name cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      minlength: [20, 'Description must be at least 20 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      index: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
      type: Number,
      default: null,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'Product must have at least one image',
      },
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
      min: [0, 'Stock cannot be negative'],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: [reviewSchema],
      default: [],
    },
    shippingDays: {
      type: Number,
      required: [true, 'Shipping days is required'],
      min: [1, 'Shipping days must be at least 1'],
    },
  },
  {
    timestamps: true,
  }
);

// Index for search
productSchema.index({ name: 'text', description: 'text', category: 'text' });

export const Product = mongoose.model<IProduct>('Product', productSchema);
