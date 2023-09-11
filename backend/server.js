const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()
const PORT=3001
const DB=process.env.MONGOURL

mongoose.connect(DB,{useNewUrlParser:true}).then(()=>{
    console.log("Database connected")
}).catch((err)=>console.log(err))
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String
    },
    coursesOn:{
        type:Array,
        default:[]
    },
    coursesCom:{
        type:Array,
        default:[]
    },
    coursesCart:{
        type:Array,
        default:[]
    }
})
const User=mongoose.model('USER',userSchema);


const courseSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const Course=mongoose.model("course",courseSchema);


const newsSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    }
})
const Newsemails=mongoose.model("newsemail",newsSchema);

const app=express()

app.get("/courses",async function(req,res){
    const courses=await Course.find({});
    res.send(JSON.stringify(courses));
})


app.post("/courseOn",bodyParser.json(),async function(req,res){
    const user=await User.findOne({email:req.body.s});
    const userOnCourse=[]
    if(user!=null && user.coursesOn!=null) res.send(user.coursesOn);
    else res.send(userOnCourse);
})
app.post("/courseCom",bodyParser.json(),async function(req,res){
    const user=await User.findOne({email:req.body.s});
    const userComCourse=[]
    if(user!=null && user.coursesCom!=null) res.send(user.coursesCom);
    else res.send(userComCourse);
})
app.post("/cart",bodyParser.json(),async function(req,res){
    const user=await User.findOne({email:req.body.s});
    const userCartCourse=[]
    if(user!=null && user.coursesCart!=null) res.send(user.coursesCart);
    else res.send(userCartCourse);
})
app.post("/register",bodyParser.json(),async (req,res)=>{
    const {name,contact,email,password,address}=req.body;
    if(!name || !contact || !email || !password){
        return res.status(422).json({error:"Please fill all the essential details"})
    }
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email Already registered. Try log in !!"})
        }
        const user=new User({name,contact,email,password,address});
        user.save().then(()=>{
            res.status(201).json({message:"user registered successfully"});
        }).catch((err)=>res.status(500).json({error:"Failed to register"}));
    }).catch((err)=>console.log(err))
})

app.post("/login",bodyParser.json(),async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(422).json({error:"Please fill all information"})
    }
    User.findOne({email:email,password:password}).then((userExist)=>{
        if(userExist){
            res.status(201).json({message:"user logged in"})
        }else{
            res.status(422).json({error:"No user registered with these credentials"})
        }
    }).catch((err)=>console.log(err))
})

app.post("/news",bodyParser.json(),async (req,res)=>{
    const {email}=req.body;
    if(!email){
        return res.status(422).json({error:"Please enter valid email"})
    }
    Newsemails.findOne({email:email}).then((userExist)=>{
        if(userExist){
            res.status(422).json({error:"You have already subscribed"})
        }else{
            const nemail=new Newsemails({email})
            nemail.save().then(()=>{
                res.status(201).json({message:"Subscription successful"});
            }).catch((err)=>res.status(500).json({error:"Failed to subscribe"}));
        }
    }).catch((err)=>console.log(err))
})

app.post("/addCart",bodyParser.json(),async (req,res)=>{
    const {s,id}=req.body;
    User.updateOne({email:s},{$addToSet:{coursesCart:id}}).then((result)=>{
        res.status(201).json({message:"Added to cart"})
    }).catch((err)=>res.status(500).json({message:"Failed to add to cart"}))
})
app.post("/delCart",bodyParser.json(),async (req,res)=>{
    const {s,id}=req.body;
    User.updateOne({email:s},{$pull:{coursesCart:id}}).then((result)=>{
        res.status(201).json({message:"Deleted from cart"})
    }).catch((err)=>res.status(500).json({message:"Failed to delete from cart"}))
})


app.listen(PORT,function(){
    console.log("Server started at PORT "+PORT);
})