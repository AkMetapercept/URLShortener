const expree=require("express")

const {handleNewShortUrl}=require("../controller/urlController")

const router=expree.Router()


router.post("/",handleNewShortUrl)

module.exports=router