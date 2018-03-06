let express=require("express");

let bodyparser=require("body-parser");

let app=express();

 app.set('view engine', 'ejs');
 app.use(express.static('public'));
 app.use(bodyparser.urlencoded({extended: false}));
 app.use(bodyparser.json());

app.get("/", (req, res)=>{
   res.render('index', {test:'salut'});
})

app.post("/", (req, res)=>{

    let infos=require("./models/infos.js");
    infos.add(req.body.input, req.body.input1, req.body.input2, req.body.input3, function(){
        console.log("success");
    });
    console.log("eleve inscrit");
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("le serveur a démaré");
});