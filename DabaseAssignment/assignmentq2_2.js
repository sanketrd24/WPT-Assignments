const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

    let itemno=1;
    let itemname ="Chair";
    let price=700;
    let category="furniture";
    con.query('update item set itemname=?,price=?,category=? where itemno=?',[itemname,price,category,itemno],
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


