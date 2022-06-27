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
    let itemname ="Table";
    let price=1500;
    let category="furniture";
    con.query('insert into item(itemno,itemname,price,category) values(?,?,?,?)',[itemno,itemname,price,category],
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


