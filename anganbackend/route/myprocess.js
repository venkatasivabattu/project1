const express=require('express');
const connection=require('../connection');
const router=express.Router();
const querystring = require('querystring');


router.get('/allschemes',(req,res)=>{
    connection.query("select * from schemes",
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.get('/all/:q',(req,res)=>{
    const q = req.params.q;
    connection.query("select * from anganwadis where avil= ? or amandal=? or adistrict=? or astate=? or apincode=?",[q,q,q,q,q],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.get('/authenticate/:u',(req,res)=>{
    const u=req.params.u;
    
    connection.query("select password from aworkers where wuid= ?",[u],(err,result)=>{
        if(err){
            res.json({error:err});
        }
        else{
            res.json({
                result:result
                
            });
        }
    });

});
router.get('/getcount',(req,res)=>{
    connection.query("select count(*) from anganwadis",
        (err,result1)=>{
            
            if(err){
                res.json({err:err});
            }
            else{
                connection.query("select count(*) from schemes",
                    (err,result2)=>{
                        if(err){
                        res.json({err:err});
                        }
                        else{
                            connection.query("select count(*) from aworkers",
                                (err,result3)=>{
                                    if(err){
                                    res.json({err:err});
                                    }
                                    else{
                                        connection.query("select count(*) from pregnants",
                                            (err,result4)=>{
                                                if(err){
                                                res.json({err:err});
                                                }
                                                else{
                                                    connection.query("select count(*) from children",
                                                        (err,result5)=>{
                                                            if(err){
                                                            res.json({err:err});
                                                            }
                                                            else{
                                                                res.send({
                                                                    ac:result1,
                                                                    sc:result2,
                                                                    wc:result3,
                                                                    pc:result4,
                                                                    cc:result5,
                                                                });
                                                                
                                                            }
                                                    });
                                                }
                                        });
                                    }
                            });
                        }
                });
        }
        
    });
    
    
});




router.get('/getAid/:wid',(req,res)=>{
    const wid=req.params.wid;
    console.log(req.params.wid,'f');
    connection.query("select aid,wname from aworkers where wuid=?",[wid],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
           
        }
    }
    );
}
);
router.get('/dscounter/:aid',(req,res)=>{
    const aid=req.params.aid;
    console.log(req.params.aid);
    connection.query("select count(*) from pregnants where aid=?",[aid],(err,result1)=>{
    if(err){
        res.json({err:err});
    }
    else{
        connection.query("select count(*) from children where aid=?",[aid],(err,result2)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result1:result1,
                    result2:result2
                });
            }
        });
    }

    });
});



router.post("/postWomen",(req,res)=>{
    console.log("hiii");
    console.log(req.body);
    connection.query("insert into pregnants set ?",req.body,(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({submit:true});
        }

    });
});
router.post("/postChild",(req,res)=>{
    console.log("hiii");
    console.log(req.body);
    connection.query("insert into children set ?",req.body,(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({submit:true});
        }

    });
});




router.get('/searchWomen',(req,res)=>{
    const q = req.url.split('?')[1];
    const qObj = querystring.parse(q);
    const s = qObj.s;
    const a = qObj.a;
    console.log(s, a);
    connection.query("SELECT * FROM pregnants WHERE (pname=?   OR gname=? OR pvil=? OR pmandal=? OR pdistrict=? OR pstate=? ) AND aid=?",
        [s, s, s, s, s, s, a],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.get('/getAllWomen/:q',(req,res)=>{
    console.log(req.params.q)
    const q = req.params.q;
    connection.query("select * from pregnants where aid= ?",[q],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.delete('/delWomen/:q',(req,res)=>{
    console.log(req.params.q,'hii')
    const q = req.params.q;
    connection.query("delete from pregnants where puid= ?",[q],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    del:true,
                    result:result
                });
            }
        }
    );
});
router.put('/updateWomen',(req,res)=>{
    console.log('hii');
    const id=req.body.id;
    const data= req.body.tdata;
    console.log(id,data.puid);
    connection.query("update pregnants set puid=?,pname=?,pdob=?,pdoc=?,delivery=?,pdod=?,pmobile=?,guid=?,gname=?,gmobile=?,relation=?,pstreet=?,pvil=?,pmandal=?,pdistrict=?,pstate=?,ppincode=? where puid=?",
    [data.puid,data.pname,data.pdob,data.pdoc,data.delivery,data.pdod,data.pmobile,data.guid,data.gname,data.gmobile,data.relation,data.pstreet,data.pvil,data.pmandal,data.pdistrict,data.pstate,data.ppincode,id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err});
            
        }
        else{
            res.json({submit:true,
                result:result});
            console.log(res);
        }
    }
    );
    
});




router.get('/searchChildren',(req,res)=>{
    const q = req.url.split('?')[1];
    const qObj = querystring.parse(q);
    const s = qObj.s;
    const a = qObj.a;
    console.log(s, a);
    connection.query("SELECT * FROM children WHERE (cname=?   OR mname=? OR cvil=? OR cmandal=? OR cdistrict=? OR cstate=? ) AND aid=?",
        [s, s, s, s, s, s, a],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.get('/getAllChildren/:q',(req,res)=>{
    console.log(req.params.q)
    const q = req.params.q;
    connection.query("select * from children where aid= ?",[q],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    result:result
                });
            }
        }
    );
});
router.delete('/delChildren/:q',(req,res)=>{
    console.log(req.params.q,'hii')
    const q = req.params.q;
    connection.query("delete from children where cuid= ?",[q],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({
                    del:true,
                    result:result
                });
            }
        }
    );
});
router.put('/promoteChildren',(req,res)=>{
    console.log('hii');
    const id=req.body.id;
    connection.query("update children set schooling=? where cuid=?",
    [1,id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err});
            
        }
        else{
            res.json({submit:true,
                result:result});
            console.log(res);
        }
    }
    );
    
});
router.put('/updateChildren',(req,res)=>{
    const id=req.body.id;
    const d= req.body.tdata;
    connection.query("update children set cuid=?,cname=?,cdob=?,cgen=?,muid=?,mname=?,mmobile=?,schooling=?,cstreet=?,cvil=?,cmandal=?,cdistrict=?,cstate=?,cpincode=? where cuid=?",
    [d.cuid,d.cname,d.cdob,d.cgen,d.muid,d.mname,d.mmobile,d.schooling,d.cstreet,d.cvil,d.cmandal,d.cdistrict,d.cstate,d.cpincode,id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err});
            
        }
        else{
            res.json({submit:true,
                result:result});
            console.log(res);
        }
    }
    );
    
});



router.get("/getAllVacDetails",(req,res)=>{
    connection.query("select * from vaccines",
    (err1,result1)=>{
        if(err1){
            res.json({err:err1});
        }
        else{
            connection.query("select * from dosages",
            (err2,result2)=>{
                if(err2){
                    res.json({err2:err2});
                }
                else{
                    res.json({
                        result1:result1,
                        result2:result2,
                        
                    });

                }
            });

        }
    });
});
router.get("/checkforVaccination",(req,res)=>{
    const q = req.url.split('?')[1];
    const data = querystring.parse(q);
    const aid=parseInt(data.aid);
    const vid = parseInt(data.vid);
    const did = parseInt(data.did);
    const uid = parseInt(data.uid);
    connection.query("select count(*) from vaccinations where aid=? and vid=? and did=? and uid=?",[aid,vid,did,uid],
    (err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
    
});
router.post("/postVaccination",(req,res)=>{
    connection.query("insert into vaccinations set ?",req.body,
    (err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
});



router.get("/getFvaccines",(req,res)=>{
    const q=req.url.split('?')[1];
    const d=querystring.parse(q);
    const vfor=d['0'];
    console.log(d['0']);
    connection.query("select * from vaccines where vfor=?",[vfor],
    (err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
});
router.get("/getFdosages/:v",(req,res)=>{
    console.log('huu');
    const q=req.params.v;
    
    console.log(q,'dodeee');
    connection.query("select * from dosages where vid=?",[q],
    (err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });

    
});
router.get("/getVaccinations",(req,res)=>{
    const q=req.url.split('?')[1];
    const d=querystring.parse(q);
    const aid=parseInt(d['aid']);
    const vid=parseInt(d['vid']);
    const did=parseInt(d['did']);
    
    if(d['status']=='hi'){
        connection.query("select * from vaccinations where aid=? and vid=? and did=?",[aid,vid,did],
        (err,result)=>{
            if(err){
                res.json({err:err});
            }
            else{
                res.json({result:result});
                
            }
        });
        

    }
    else{
        let s=false;
        if(d['status']=='true'){
            s=true;


        }
        connection.query("select * from vaccinations where aid=? and vid=? and did=? and status=?",[aid,vid,did,s],
        (err,result)=>{
            if(err){
                res.json({err:err});
                
            }
            else{
                res.json({result:result});
                
            }
        });

    }
    
    
});


router.put("/markVaccination",(req,res)=>{
    const d=req.body.params;
    let date=new Date();
    connection.query("update vaccinations set status=?,date=? where aid=? and vid=? and did=? and uid=?",[true,date,d.aid,d.vid,d.did,d.uid],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
    
   
});


//vie vaccine realated
router.get('/getVaccine_Dosage/:id',(req,res)=>{
    const id=req.params.id;
    connection.query("select * from vaccines where vid=?",[id],
    (err,res1)=>{
        if(err){
            res.json({err:err});
        }
        else{
            connection.query("select * from dosages where vid=?",[id],
                (err,res2)=>{
                    if(err){
                        res.json({err:err});
                    }
                    else{
                        res.json({
                            res1:res1,
                            res2:res2
                        });
                    }
                }
            );
        }
    });
});
module.exports=router;