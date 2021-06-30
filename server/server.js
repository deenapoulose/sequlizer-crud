const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api',apiRoutes);
db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server runing on ${PORT}` )
    })
})
