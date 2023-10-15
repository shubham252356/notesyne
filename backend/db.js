const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/noteSync";


const connectToMongo = ()=> {
    mongoose.connect(mongoURI)
    .then(()=>console.log("Connected To MongoDB Successfully!")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;