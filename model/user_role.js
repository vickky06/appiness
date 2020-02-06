const mongoose =  require ("mongoose");
const shortid = require('shortid'); //generate Short IDS

var user_role = new mongoose.Schema({
    userId : {
        type : String,
        'default': shortid.generate
        },
    admin : {
        type: String,
        required : true,
        
    }


})




mongoose.model("User_role",user_role)

//Adding user role 
//the User ID will be used while logging in.