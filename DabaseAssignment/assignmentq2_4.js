const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

    let itemno=5;
    con.query('select * from item where itemno =?',[itemno],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
            if(res.length>0){

                console.log("itemno="+res[0].itemno+" itemname="+res[0].itemname+" price="+res[0].price+" category="+res[0].category); 
            }
            else{
                console.log("Not found");
            }
         }
    });


