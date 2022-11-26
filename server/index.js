var express = require("express")
var app = express()
const mysql = require('mysql')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const { response } = require("express");
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}


app.use(cors(corsOptions))
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'punith123',
  database: 'Yamaha'
})

db.connect()

app.post('/', (req, res) => {

  console.log(req.body.data)

  db.query("select * from showroom where s_name='" + req.body.data.username + "' and s_password='" + req.body.data.password + "'", (err, result) => {
    if (result.length > 0) {
      res.send(true)
    } else {
      res.send(false)
    }
  })


})

app.post('/dashboard', (req, res) => {
  data = []

  db.query("select * from customer", (err, result) => {
    data.push({ "customer": result.length })
    db.query("select * from bike", (err, result) => {
      data.push({ "bike": result.length })
      db.query("select count(*) as orders from orders", (err, result) => {
        data.push({ "orders": result[0].orders })
        db.query("select sum(b.b_price) as sales from bike b , orders o where b.b_id=o.b_id ", (err, result) => {
          data.push({ "sales": result[0].sales })
          db.query("select b_name,b_model from bike where b_id in (select b_id from temporaryView)", (err, result) => {
            console.log(result)
            data.push({ "preffered": result[0] })
            res.send(data)
          })

        })


      })

    })


  })

})


app.post('/customers', (req, res) => {
  console.log(req)
  db.query("select * from customer", (err, result) => {
    res.send(result)
  })
})


app.post('/del-customer', (req, res) => {
  const custID = req.body.cust
  console.log(custID)
  db.query("delete from customer where c_id='" + custID + "'", (err, result) => {
    if (result) {
      res.send(true)
    } else {
      res.send(false)
    }
  })
})

app.post('/save-bike', (req, res) => {
  const { bikeID, bikeName, bikeModel, bikePrice, quantity, warehouse, bikeCC, bikeGear, bikeMileage,bikeType } = req.body.data

  db.query("insert into bike values('" + bikeID + "','" + bikeName + "','" + bikeModel + "','" + bikeCC + "','" + bikeMileage + "','" + bikeGear + "','" + bikePrice + "','" + quantity + "','" + warehouse + "','"+bikeType+"')", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })
})


app.post('/del-bike', (req, res) => {
  const bikeID = req.body.bike
  db.query("delete from bike where b_id='" + bikeID + "'", (err, result) => {
    if (result) {
      res.send(true)
    } else {
      res.send(false)
    }
  })
})


app.post('/load-warehouse', (req, res) => {
  db.query('select w_id from warehouse', (err, result) => {
    if (err) {
      res.send(false)
    } else {
      res.send(result)
    }
  })
})

app.post('/load-bike', (req, res) => {
  db.query('select b_id from bike', (err, result) => {
    if (err) {
      res.send(false)
    } else {
      res.send(result)
      console.log(result)
    }
  })
})

app.post('/load-customers', (req, res) => {
  db.query('select c_id from customer', (err, result) => {
    if (err) {
      res.send(false)
    } else {
      res.send(result)
    }
  })
})

app.post('/load-employees', (req, res) => {
  db.query('select e_id from employee', (err, result) => {
    if (err) {
      res.send(false)
    } else {
      res.send(result)
    }
  })
})

app.post('/load-accesories', (req, res) => {
  db.query('select a_id from accesory', (err, result) => {
    if (err) {
      res.send(false)
    } else {
      res.send(result)
    }
  })
})

app.post('/save-accesory', (req, res) => {
  const { id, name, bid, price } = req.body.data

  db.query("insert into accesory values('" + id + "','" + name + "','" + bid + "','" + price + "')", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })

  // console.log(id,name,model,price,quantity)

})


app.post('/del-acc', (req, res) => {
  const accID = req.body.acc
  db.query("delete from accesory where a_id='" + accID + "'", (err, result) => {
    if (result) {
      res.send(true)
    } else {
      res.send(false)
    }
  })
})

app.post('/userregID',(req,res)=>{
  db.query('SELECT c_id FROM Yamaha.customer order by  c_id desc limit 1',(err,result)=>{
    if(err){
      console.log("error occured")
      res.send(false)
    }else{
      res.send(result[0])
    }
  })
})

app.post('/userregister', (req, res) => {
  const {cid, name, email, phone, password, gender, dob, state, city, addr } = req.body.data;
  console.log(name, email, phone, password, gender, dob, state, city, addr)
  db.query("insert into customer (c_id,c_name,c_gender,c_addr,c_phno,c_gmail,c_dob,c_state,c_city,c_password) values ('"+cid+"','" + name + "','" + gender + "','" + addr + "','" + phone + "','" + email + "','" + dob + "','" + state + "','" + city + "','" + password + "')"
    , (err, result) => {
      if (err) {
        res.send(false)
        console.log(err)
      } else {
        res.send(true)
      }
    })

})

app.post('/userlogin', (req, res) => {
  const username = req.body.data.username
  const password = req.body.data.password
  db.query("select * from customer where c_name='" + username + "' and c_password='" + password + "'", (err, result) => {
    
    if (err) {
      res.send(false)
    } else {
      if (result.length > 0) {
        res.send(true)

      } else {
        res.send(false)
      }
    }
  })
})

app.post('/save-purchase', (req, res) => {
  const { aid, cid, date } = req.body
  db.query("insert into buys values('" + aid + "','" + cid + "','" + date + "')", (err, result) => {
    if (err) {
      console.log(err)
      res.send(false)
    } else {
      res.send(true)
    }
  })
})


app.post('/save-warehouse', (req, res) => {
  const { wID, wname, waddr, wphone } = req.body
  console.log(wID, wname, waddr, wphone)

  db.query("insert into warehouse values ('" + wID + "','" + wname + "','" + wphone + "','" + waddr + "')", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })

})

app.post('/del-warehouse', (req, res) => {
  const { wID } = req.body
  console.log(wID)
  db.query("delete from warehouse where w_id='" + wID + "'", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })
})


app.post('/save-deliver', (req, res) => {
  const { WID, BID, quantity } = req.body
  db.query("insert into deliver values ('" + WID + "','" + BID + "','1','" + quantity + "')", (err, result) => {
    if (err) {
      res, send(false)
    } else {
      res.send(true)
    }
  })
})


app.post('/save-employee', (req, res) => {
  const { eid, ename, dob, phone, salary, addr } = req.body
  db.query("insert into employee values ('" + eid + "','" + ename + "','" + dob + "','" + phone + "','" + addr + "','" + salary + "','1')", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {

      res.send(true)
    }
  })
})



app.post('/delete-employee', (req, res) => {
  const { eid } = req.body
  db.query("delete from employee where e_id='" + eid + "'", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })
})


app.post('/save-orders', (req, res) => {
  const { bid, cid, eid, date } = req.body
  db.query("insert into orders values ('" + eid + "','" + cid + "','" + bid + "','" + date + "')", (err, result) => {
    if (err) {
      res.send(false)
      console.log(err)
    } else {
      res.send(true)
    }
  })
})




app.post('/get-emp',(req,res)=>{
  db.query('select e.e_id,e.e_name,e.e_phno,count(e.e_id) as t from employee e right join orders o on o.e_id=e.e_id group by e.e_id  order by t desc limit 1',(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})


app.post('/get-acc',(req,res)=>{
  db.query('select a.* from accesory a where a.a_id = (select b.a_id from buys b where b.date=(select max(date) from buys))',(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})

app.post('/get-city',(req,res)=>{
  db.query('select count(c_city) as countVal ,c_city as city from customer group by c_city  having COUNT(c_city)>=ALL(select count(c_city) from customer group by c_city)',(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})

app.post('/get-maxcust',(req,res)=>{
  db.query('select o.c_id,count(o.c_id) as countVal,c.c_name from orders o , customer c where o.c_id=c.c_id group by o.c_id having count(o.c_id)>=ALL(select count(c_id) from orders group by c_id)',(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
      
    }
  })
})


app.post('/get-sumbike',(req,res)=>{
  db.query('select b.b_type as type,sum(b.b_price) as total from bike b,orders o where b.b_id=o.b_id group by b.b_type ',(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
      
    }
  })
})


app.post('/get-accsum',(req,res)=>{
 const {date1,date2}=req.body
  db.query("SELECT sum(a.a_price) as sum from accesory a right join buys b on a.a_id=b.a_id and b.date between '"+date1+"'and '"+date2+"';",(err,result)=>{
    if(err){
      console.log(err)
     
    }else{
      res.send(result)
      
    }
  })
})


app.post('/get-countbike',(req,res)=>{
  db.query("SELECT count(b_type) as count , b_type as type from bike group by b_type",(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result)
      
    }
  })
})


app.post('/get-orders',(req,res)=>{
  db.query('SELECT o.e_id, b.b_name,b.b_model,b.b_price,o.o_date,b.b_type from orders o , bike b where o.b_id=b.b_id',(err,result)=>{
    if(err){
      res.send(false)
    }else{
      res.send(result)
      console.log(result)
    }
  })
})

app.listen(4000, () => {
  console.log("listening to port 4000")
})

