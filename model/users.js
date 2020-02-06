const mongoose =  require ("mongoose");


var user = new mongoose.Schema({
    Name :{
        type : String,
        required : true
    },
    userId : {
        type : String,
        
    },
    password :{
        type : String
    }

});


mongoose.model("User",user)


///User models for storing User Data  
//The session management can be addeed by adding a new field token and generating an array of tokens
//Hashing password must be added before moving this mode to  development.