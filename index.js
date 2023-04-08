const express = require('express');
const app =express();
const port = process.env.Port || 5000;


const cors = require('cors');

app.use(cors());

const books = require("./data/book.json")


// app.get('/',(req,res)=>{
//     res.send('simple page running')
// });

app.get('/books', (req, res)=> {
    res.send(books);
});



app.get('/books/:id',(req,res)=>{  
        const id = req.params.id;
        const bookDetails= books.find(n=>n.id === id);
        res.send(bookDetails);
        
    });
    
       

app.listen(port,()=>{
    console.log(`simple not running on port ${port}`)
})
