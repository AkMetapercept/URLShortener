const mongoose=require("mongoose")

async function conncetDB(url)
{   
    return mongoose.connect(url)

}

module.exports={
    
    conncetDB
}