const express=require('express');
const app=express();
const mysql=require('mysql2');
app.listen(789);

let dbparams={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'newdatabase',
    port:3306
}
const con=mysql.createConnection(dbparams);

app.use(express.static("ab"));
app.get("/getpincode",(req,resp)=>{

    let totheclient={ status:false,details:{ pincode:0,area:"" } };
    let pin=req.query.pincode;
    console.log(pin);
    con.query('select * from areas where pincode=?',[pin],
    (err,res)=>{

        if(err){
            console.log(err);
        }
        else{
           if(res.length>0){
               console.log("Area Found");
               totheclient.status=true;
               totheclient.details=res[0];
           }
           else{
               console.log("Not found");
           }
        }
        console.log(totheclient);
        resp.send(totheclient)
    });
});

    app.get("/updatearea",(req,resp)=>{

        let totheclient={ status:false};
        let pin=req.query.pincode;
        let ar =req.query.area;
        console.log(pin);
        console.log(ar);
        con.query('update areas set area=? where pincode=? ',[ar,pin],
        (err,res)=>{
    
            if(err){
                console.log(err);
            }
            else{
               if(res.affectedRows>0){
                   console.log("Area Updated");
                   totheclient.status=true;
                   
               }
               else{
                   console.log("Not Updated");
               }
            }
    
            resp.send(totheclient)
        });
    });


