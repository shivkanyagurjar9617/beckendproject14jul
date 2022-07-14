    //console.log('hello')
    //1. import area
    const express = require('express')
    const exp = express()

    //exp.use() is method and use(express.json())is a middleware

    exp.use(express.json())
    //object.method()
    exp.post('/',(req,res)=>{
        console.log(req.body)
        //object.proparty
        res.json({
                "information":req.body,
                "name": req.body.name ,
                "surname":req.body.surname,
                "add":req.body.address,
                "mono":req.body.mono
        })
        
    })
    let port = 4000
        //object .method
        //object.fetarrow function  ()=>{}
    exp.listen(port,()=>{
        console.log(`this port no is ${port} ` )
    })