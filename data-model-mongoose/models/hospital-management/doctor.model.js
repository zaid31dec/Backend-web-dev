import mongoose from 'mongoose';

const doctorShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    qualification:{
        type: String,
        required: true,
    },
    experienceInYears:{
        type: Number,
        defalut: 0,
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
},{timestamps:true});


export const Doctor =  mongoose.model('Doctor',doctorShema);