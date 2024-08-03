// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"please enter name"],
  },
  type: {
    type: String,
    enum: ['veg', 'non-veg'],
    required: [true,"please enter type"],
  },
  expiryDate: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
