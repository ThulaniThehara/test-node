const mongoose = require('mongoose');
const url=process.env.URI;

mongoose.connect(url).then(()=>{
    console.log("Database connected Sucessfully");
}).catch((err)=>{
    console.log("Error in database connection",err);
});