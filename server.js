const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
// const cars=require('./static/home.js')
app.use(express.static('./static'))
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './static/home.html'))
})
// app.get('/carCrowd/showRoom/:productId',(req,res)=>{
//     console.log(req.params);
//     const {productId}=req.params;
//         let allProducts=cars.find((product)=>product.id===Number(productId))
//         if(allProducts.length<1)
//         {
//             res.send('<h1>Not found</h1>')
//         }
//         res.json(allProducts);

// })
// app.get('/carCrowd/showRoom/query',(req,res)=>{
//     console.log(req.query);
//     const {Model, Type}=req.query;
//     let carproducts=cars;
//     if(Type)
//     {
//         carproducts=carproducts.filter((product)=>{
//             return product.type.startsWith(Type)
//         })
//     }
//     if(Model)
//     {
//         carproducts=carproducts.filter((product)=>{
//             return product.model.startsWith(Model)
//         })
//     }
//     if(carproducts.length<1)
//     {
//         res.send('<h1>Not found</h1>')
//     }
//     res.json(carproducts);
// })
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})
