import mysql from "mysql2";

console.log(process.env.USUARIO);
const connection = mysql.createConnection({
  host: "localhost",
  user: "VIDOTTO",
  password: "chile1035",
  database: "vidotto",
});

export default connection;
