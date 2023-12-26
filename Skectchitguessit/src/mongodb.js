const mongooose=require('mongoose')

mongooose.connect("mongodb://localhost:27017/loginsignup") 
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongooose.Schema({
    username:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true
    }
})

const collection = new mongooose.model("Collection1",LogInSchema)

module.exports=collection