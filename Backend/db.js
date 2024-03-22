const mongoose=require('mongoose')

const mongoURI='mongodb://localhost:27017/portfolio'

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('successfully connected to mongo')
    })
}

module.exports= connectToMongo
