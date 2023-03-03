const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'sampledb'
});
connection.connect(
    (err)=>{
        if(err){
            console.log('not connected');

        }
        else{
            console.log('connected');
        }
    }
);
module.exports=connection;