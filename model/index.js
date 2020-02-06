const mongoose =  require ("mongoose");
mongoose.connect("mongodb://localhost:27017/regAdmin",{ useNewUrlParser: true,useUnifiedTopology: true  },(error)=>{
if(!error){
    console.log("Successfully conneceted")
}
else{
    console.log("No success")
}

}
);


const User = require ("./users.js")
const User_role = require ("./user_role.js")


/**
 * 
 * Setting up mongo connection with Mongoose
 */