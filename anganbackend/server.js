const express=require('express');
const cors=require('cors');
const connection=require('./connection');
const bodyparser=require('body-parser');
const myprocess=require('./route/myprocess');
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',myprocess);
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log('running on 3000');
});