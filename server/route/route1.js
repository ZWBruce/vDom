const express = require('express');
const router = express.Router();

router.get('/a',(req,res)=>{
    res.render('index',{title:'首页下面的a',text:'aaaa'});
})

module.exports = router;