const expree=require("express")

const {conncetDB}=require("./routes/config")

const urlRoute=require("./routes/url")

const app=expree()

app.use(expree.json())

app.listen(5000,()=>{
    console.log("Your Port Running ",5000);
})

conncetDB("mongodb+srv://akshayrp:root@cluster.ar9cvdc.mongodb.net/")
.then(()=>{
    console.log("Database Connected..");
})

urlRoute.use("/url",urlRoute)