const express = require('express');
const {User} = require('./model')
const app = express();

app.listen(4000);

app.use(express.urlencoded({extended:true}))

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
})

// 获取所有数据
app.get('/getAll',function(req,res){
    User.find(function(err,docs){
        if(err){
            res.send({status:'ERROR',date:null});
            return ;
        }
        res.send({status:'SUCCESS',data:docs});
    })
})

// 添加数据
app.get('/add',function(req,res){
    let emp = req.query.emp;
    let o = new User(emp);
    o.save(function(err,doc){
        if(err){
            res.send({status:'ERROR'});
            return ;
        }
        res.send({status:'SUCCESS'});
    })
})

// 获取某员工的数据
app.get('/getEmpInfo',function(req,res){
    let query = req.query;// {empId:'xxx',empName:'xx'}
    User.find(query,function(err,docs){
        if(err){
            console.log(err);
            res.send({status:'ERROR',msg:'网络故障'});
            return ;
        }
        if(docs.length==0){
            res.send({status:'ERROR',msg:'查无此数据'});
            return ;
        }
        res.send({status:'SUCCESS',data:docs[0]})
    })
})

// 修改员工信息
app.post('/modify',function(req,res){
    let filter = req.body.filter;
    let data = req.body.data;
    User.updateOne(filter,data,function(err,raw){
        if(err){
            console.log(err);
            res.send({status:'ERROR',msg:'网络故障'});
            return ;
        }
        if(raw.nModified==0){
            res.send({status:'ERROR',msg:'数据未修改'});
            return ;
        }
        res.send({status:'SUCCESS'});
    })
})