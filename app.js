import bodyParser from "body-parser";
import express from "express";
import translate from "translate-google";
const app = express();
const port = 3001;
app.use(express.static('public'))
// const text_show = []
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render('index.ejs',{test: ''});
});
app.post("/translate",(req,res)=>{
    const text_show = req.body['text']
    if(req.body['text'] == ""){
        res.render('index.ejs',{test :""});
    }else{
         translate(text_show, {to: 'ja'}).then(translateResult => {
        console.log(translateResult);
        res.render('index.ejs',{test :translateResult});
    }).catch(err => {
        console.error("hehe");
    })
    }
   
   
});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});