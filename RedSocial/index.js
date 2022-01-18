const express = require('express');
const app = express();
const sequelize = require('./conexion.js');

app.use(express.static('./public/views/Inc_01_04/index.html'));

async function findAllRows() {

    sequelize.query("Select * from users", {type: sequelize.QueryTypes.SELECT})
    .then(function(personas) {
        console.log(personas);
    })
}

findAllRows();

app.listen(3000, () => {
    console.log('Server on port 3000');
})