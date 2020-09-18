var express=require('express');
var router=express.Router();
var searchModel=require('../models/searchForDoctor');

router.get('/:docId/:searchString',function (req,res) {
   console.log(req.params);
    var search={
       docId:req.params.docId,
       str:req.params.searchString
   };
   console.log(search);
   searchModel.get(search,function (results) {
       console.log(results);
       res.json(results);
   });
});


module.exports=router;
