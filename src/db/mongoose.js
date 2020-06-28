const mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!');
//             }
//         }
//     },
//     password:{
//         type:String,
//         trim:true,
//         required:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes('password'))
//             {
//                 throw new Error('Password cannot contain String password!');
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     }
// })

// const me=new User({
//     name:'         Andrew       ',
//     email:'           hridoyadi7@gmail.com          ',
//     password:'phone898'
// })


// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     Completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const task=new Task({
//     description:"Eat lunch",
//     Completed:false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error!',error)
// })