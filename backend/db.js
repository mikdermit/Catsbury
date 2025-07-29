import mysql from "mysql2";
// Importing dotenv to manage environment variables
import dotenv from "dotenv";
dotenv.config({ path: ".env" }, { override: true });
dotenv.config({ debug: true });

const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
    .promise();

// Get all cats
export async function getCats() {
    const [rows] = await pool.query("SELECT * FROM cats");
    return rows;
}
// Get specific cat
export async function getCat(id) {
    const [rows] = await pool.query("SELECT * FROM cats WHERE id = ?", [id]);
    return rows;
}
// Create cat
export async function createCat(id, name, sex, dob, description) {
    const [result] = await pool.query(`INSERT INTO cats 
                                       (id, name, sex, dob, description) 
                                       VALUES (?, ?, ?, ?, ?)`, 
                                       [id, name, sex, dob, description]);
    const resultId = result.insertId;
    return getCat(resultId);
}
// Delete cat
export async function deleteCat(id) {
    const [result] = await pool.query("DELETE FROM cats WHERE id = ?", [id]);
    return result;
}
