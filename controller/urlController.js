
const UrlModel=require("../model/urlModel")
const {shortid}= require("shortid")

async function handleNewShortUrl(req,res)
{
    const body=req.body
    if(!body.UrlModel) return res.status(400).json({error:"URl is Required"})
    
    const shortId=shortid();
    await UrlModel.create(
        {
            shortId:shortId,
            redirectUrl:body.UrlModel,
            visitHistory:[],

        }
    )
    return res.json({id:shortId})
}

module.exports={
    handleNewShortUrl
}