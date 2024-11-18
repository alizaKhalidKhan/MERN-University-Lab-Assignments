const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use(express.json())
const employees = [
    {id:1 , name:'Aliza Khalid', position:'Software Developer', department:'IT'},
    {id:2 , name:'Umar Hayat', position:'Content Writer', department:'Marketing'},
    {id:3 , name:'Zaviyar Sultan', position:'Financial Analyst', department:'Finance'},
    {id:4 , name:'Hurrem Orebi', position:'Software Developer', department:'IT'}
];
app.get('/employees/:id', (req,res)=>{
    const employeeID = parseInt(req.params.id);
    const employee = employees.find(e => e.id === employeeID);
    if(employee){
        res.json(employee);
    }else{
        res.status(404).send('User not found');
    }
});
app.listen(port, ()=>{
    console.log(`Server on http://localhost:${port}`);
});