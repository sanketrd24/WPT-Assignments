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
con.query('update cusers set password=? where userid=?',[password,userid],
(err,res1)=>{
    if(err){
        console.log(err);
    }
    else{
        if(res1.affectedRows==0){
            console.log("update failed");
        }
        else{
            console.log("update succeeded");
        }
    }
}
)