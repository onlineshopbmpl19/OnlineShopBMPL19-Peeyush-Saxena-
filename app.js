const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use('/uploads',express.static('uploads'));
app.get('/',(req,res)=> {
    res.render('dashboard');
});
app.use('/admin',require('./routes/admin'));
app.use((req,res)=> {
    res.send('Sorry Wrong Direction ');
});
app.listen(process.env.PORT || 7654 ,(err)=> {
    if(err) {
        console.log("Error While connecting to Server , Error is :- ",err);
    }
    else {
        console.log("Connected to server ");
    }
});