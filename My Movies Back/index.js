require("dotenv").config();
const { Sequelize } = require("sequelize");
const server = require('./src/App.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3001;

    conn.sync({ force: true }).then(() => {
        server.listen(port, () => {
            console.log(`Server on port ${port}`)
        }) ;
    })

