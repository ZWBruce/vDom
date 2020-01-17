// const express1 = require('express');
const router = express.Router();

router.get('/a',(req:any,res:any)=>{
    res.render('index',{title:'首页下面的a',text:'aaaa'});
})

module.exports = router;