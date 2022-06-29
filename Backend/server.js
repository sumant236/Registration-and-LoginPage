const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const UserData = require("./Schema/user.schema");

app.use(express.json());
app.use(cors());

const DB_URL = "mongodb+srv://sumant:sumant@loginandsignup.cyehodo.mongodb.net/loginAndSignUp?retryWrites=true&w=majority";

const connect = () => {
    console.log("DB Connected")
    return mongoose.connect(DB_URL)
}

app.post("/login", (req, res)=> {
    const {email , password} = req.body;
    UserData.findOne({email: email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message: "Welcome to HomePage", user: user})
            }
            else{
                res.send({message: "Password didn't match"})
            }
        }
        else{
            res.send({ message: "User is not registered"})
        }
    })    
})

app.post("/register", (req, res)=> {
    const {name, email, password, phoneNo} = req.body
    UserData.findOne({email: email}, (err, user)=>{
        if(user){
            res.send({message: "User Already Registered"})
        }
        else{
            const user = new UserData({name, email, phoneNo, password})
            user.save(err=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message: "Successfully Registered, Please go to Login page"})
                }
            }) 
        }
    })
})



app.listen(8000, async()=>{
    // for error handling
    try{
        await connect();
        console.log("Listening to PORT No. 8000")
    }
    catch(e){
        console.log(e.message);
    }
})