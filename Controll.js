const Mailer = require('./Mailer')
const fs = require('fs')
const path = require('path')

exports.send = function(req,res){
    console.log(req.body)
    let M = new Mailer(req.body)
     M.mail().then(
     (response) => res.status(200).json({response: response})
     ).catch(
    (error) => res.status(401).json({response: error})
     )

}
exports.PropImgHandler = (req,res) => {
    res.status(200).json({data: req.image})
}

exports.deleteProp  =function(req,res){
    req.body.url.map( async url => {
        //let st = req.body.url.split('/',2)
        const dir = `./public${url}`
        fs.unlink(dir,() => console.log("done"))
    } )
    res.status(200).json({response: "DELETED"})
}
