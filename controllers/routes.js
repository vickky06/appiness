const express = require("express")
const mongoose = require("mongoose")
const User = mongoose.model("User")
const User_role = mongoose.model("User_role")
const router = express.Router();


//////ROUTER to get a the registration form
router.get("/register",(req,res)=>{
    //console.log(req.body)
    res.render("add-User")
})

//////ROUTER to post data into the Models of Users
router.post("/register",(req,res)=>{
    //console.log(req.body)
    let body = req.body;
    let nUser = new User();
    let user_role = new User_role();
    User_role.countDocuments(function(err, count) {
        console.log("Total matches: " + count);/////Checking for any previous entry as admin will be only first user.
        if (count == 0) {
            
            user_role.admin = true;
            
        } else {
            console.log("Data exist")
            user_role.admin = false;
              
        }
        user_role.save((err, doc) => {
            if (!err) {
                console.log("User_role saved")
            } else {
                console.log(err)
            }
        })
    
    });
    nUser.Name = body.name;
    nUser.userId = user_role.userId;
    nUser.password = body.password1;
    nUser.save((err,doc)=>{
        if (!err){

            res.redirect("/Users/list")}
        else{
            res.send("Error Occured")
        }
    })
    ;
})


//////ROUTER to get a list of the users in the application along wiht the user ID
router.get("/list",(req,res)=>{
    let user_role = new User_role();
/*   test data
    var nUser = new User();
    nUser.Name = "Vivek";
    nUser.userId = "QM865";
    nUser.password = "Qwerty@123";
    await nUser.save();*/
    User.find((err,docs)=>{
        if(!err)
        {//console.log(docs)
            res.render("list",{data: docs})
           
        }
        else{
            console.log(err)
            res.send("Controller Failed")
        }
    })
   



   
})

module.exports = router;