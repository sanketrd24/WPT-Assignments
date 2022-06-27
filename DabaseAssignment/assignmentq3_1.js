const mysql=require('mysql2');

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

    let resourceid=1;
    let resourcename ="Electricity";
    let status=true;
    
    con.query('insert into resourse(resourceid,resourcename,status) values(?,?,?)',[resourceid,resourcename,status],
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


