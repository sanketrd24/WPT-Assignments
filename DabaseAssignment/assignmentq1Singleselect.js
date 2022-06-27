const url="";
let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
};

const mysql=require('mysql2');
const con=mysql.createConnection(dbparams);
let userid='y';
let password='x';
con.query('select userid,password from cusers where userid=? and password=?',[userid,password],
(err,res1)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res1.length);
        console.log("userid="+res1[0].userid+" password="+res1[0].password);
    }
}
)