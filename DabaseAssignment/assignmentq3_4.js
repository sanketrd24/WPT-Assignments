const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

    let resourceid=4;
    con.query('select * from resource where resourceid =?',[resourceid],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
            if(res.length>0){

                console.log("resourceid="+res[0].resourceid+" resourcename="+res[0].resourcename+" status="+res[0].status);
            }
            else{
                console.log("Not found");
            }
         }
    });


