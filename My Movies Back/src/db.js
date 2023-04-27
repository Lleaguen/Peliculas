require("dotenv").config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

let sequelize = process.env === "production" ? 
new Sequelize({
    database: "my_movies",
    dialect: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
}) :
//${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}
new Sequelize(`postgres://postgres:main@localhost/my_movies`,{
    logging: false,
    native: false
})

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file)=>{
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
 
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Movies, Users } = sequelize.models;

Movies.hasOne(Movies, { through: "movies", timestamps:false });
Users.hasOne(Users, { through: "users", timestamps:false });


module.exports = {
    ...sequelize.models,
    conn: sequelize
}