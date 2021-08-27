
//Loading Modules
const express=require('express');
const exphbs=require('express-handlebars');
const mongoose=require('mongoose');

//Connecting to MongoUri exported from external(keys.js File)
const keys=require('./config/keys');
//Created app Variable to initialize our application
const app=express();
//Set up handlebars with View Engine
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));

app.set('view engine','handlebars');
//Set up static files to serve css,js,images
app.use(express.static('public'));
//connect to mongoose
mongoose.connect(keys.MongoURI,
    {
        useNewUrlParser:true
    })
.then(()=>
{
    console.log('Connected to remote Database....');
}).catch((err)=>
{
    console.log(err);
});
//Setting Port for local Machine
const port=process.env.PORT||5000;

//Handleing Routes
app.get('/',(req,res)=>
{
    res.render('home');
});
app.get('/about',(req,res)=>
{
    res.render('about');
});

app.listen(port,()=>
{
    console.log('Server is running by Nodemon on port',port);
});