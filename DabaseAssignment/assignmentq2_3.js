const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

    let category="furniture";
    con.query('select * from item where category =?',[category],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
            if(res.length>0){
            
                for(let i=0;i<res.length;i++)
                console.log("itemno="+res[i].itemno+" itemname="+res[i].itemname+" price="+res[i].price+" category="+res[i].category); 
            }
            else{
                console.log("Not found");
            }
         }
    });


