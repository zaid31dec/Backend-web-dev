import mongoose from 'mongoose';

const patientdShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    diagnosedWith:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    bloodGroup:{
        type: String,
        require: true,
    },
    gender:{
        type: String,
        enum: ['M','F','O'],
        required: true,
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }
},{timestamps:true});


export const Patient =  mongoose.model('Patient',patientdShema);