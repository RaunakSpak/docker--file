const express = require('express'); 

const app = express();

app.get('/', (_, res)=>{
    res.json({message: "Hello from docker 🐋"});
})

app.listen(3000, ()=> console.log('Server is on PORT 3000'));