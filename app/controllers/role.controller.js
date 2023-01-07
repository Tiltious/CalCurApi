const db = require("../models");
const Role = db.role;

exports.getAllRoles = (req,res)=>{
    Role.find({}).exec(
        (err,result)=>{
            if(err){res.status(500).send({message:err});return;}
            if(!res){res.status(404).send({message:'Roles not found'});return;}
            res.status(200).json(result);
        }
    )
}