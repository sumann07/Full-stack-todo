const user = require("../models/todo");


exports.addItem=(req,res)=>{
    const {title,description}=req.body;
    if(title==='' || description===''){
        return res.status(400).json({
            error:'please provide title and description'
        });
    }
    const add=new user({
        title:title,
        description:description
    })
    add.save((err,additem)=>{
        if(err){
            return res.status(400).json({
                error:'something went wrong'
            })
        }
        res.json({
            message:'Item save succesfully'
        })
    })
 }
 exports.deleteItem=(req,res)=>{
    const {_id}=req.body;
    user.findByIdAndDelete({_id:_id}).exec(err=>{
        if(err){
            return res.status(400).json({
                error:`something went wrong`
            })
        }
        return res.json({
            message:`successfully deleted`
        })
    })
}
exports.updateItem=(req,res)=>{
    const {_id,title,description}=req.body;
    if(_id!==''){
        user.findOne({_id:_id}).exec((err,User)=>{
            if(err){
                return res.status(400).json({
                    error:`went wrong`
                })
            }
            user.findByIdAndUpdate(_id,{$set:{title:title, description:description}}).exec((err,data)=>{
                if(err){
                    return res.status(400).json({
                        error:`something went wrong`
                    })
                }
                return res.json({
                    data:data,
                    message:`sucessfully updated`
                })
            })
        })
    }
}
exports.getAll=(req,res)=>{
    user.find({}).exec((err,User)=>{
        if(err){
            return res.status(400).json({
                error:'something went wrong'
            })
        }
        return res.json({
            data:User,
            mesaage:'sucessfully'
        })
    })
}