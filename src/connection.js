const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Faizansar:faiza123@ansar@faizamedia.crcegz9.mongodb.net/test";
  

mongoose.connect(DB,
  {
    useUnifiedTopology:true,
    useNewUrlParser:true
  }).then(()=>console.log(" Connected")).catch((err)=>{
    console.log(err);
})