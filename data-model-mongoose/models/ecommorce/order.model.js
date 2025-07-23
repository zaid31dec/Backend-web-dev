import mongoose from 'mongoose';

const orderItemShema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity:{
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    custome:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems:{
        type: [orderItemShema],
    },
    address:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['PENDING','CANCELLED','DELIVERED'],
        default: 'PENDING',
    }

},{timestamps: true});


export const Order = mongoose.model('Order',orderSchema);