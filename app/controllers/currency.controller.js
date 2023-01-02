const db = require("../models");
const Currency = db.currency;

exports.getAllCurrencies = (req,res)=>{
    Currency.find({}).exec(
        (err,result)=>{
            if(err){res.status(500).send({message:err});return;}
            if(!res){res.status(404).send({message:'Currencies not found'});return;}
            res.status(200).json(result);
        }
    )
}

exports.editCurrency = (req,res)=>{
    Currency.findByIdAndUpdate(
        req.params._id,
        {$set: req.body},
        (err,curr)=>{
            if(err){res.status(500).send({message:err});return;}
            if(!curr){res.status(404).send({message:'Currency not found'});return;}
            res.status(200).send({message: 'Currency updated successfully!'});
        })
    
}
