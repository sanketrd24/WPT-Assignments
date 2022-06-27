const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

let status=false;
    con.query('select * from resource where status =?',[status],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
            if(res.length>0){
            
                for(let i=0;i<res.length;i++)
                console.log("resourceid="+res[i].resourceid+" resourcename="+res[i].resourcename+" status="+res[i].status); 
            }
            else{
                console.log("Not found");
            }
         }
    });


