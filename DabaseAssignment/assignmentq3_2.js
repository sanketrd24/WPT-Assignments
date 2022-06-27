const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

let resourceid=3;
let resourcename ="Water Supply";
let status=false;
    con.query('update resourse set resourcename=?,status=? where resourceid=?',[resourcename,status,resourceid],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
           console.log(res.affectedRows);
        }
        console.log(totheclient);
        resp.send(totheclient)
    });


