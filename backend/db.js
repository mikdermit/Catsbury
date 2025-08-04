import mysql from "mysql2"; // Using mysql2 for promise support
import cors from "cors"; // For handling CORS issues
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());
// Importing dotenv to manage environment variables
// import dotenv from "dotenv";
// dotenv.config();
// // dotenv.config({ path: ".env" }, { override: true });
// dotenv.config({ debug: true });

const pool = mysql
    .createPool({
        host: "catsbury-park-db.ccvse686q60s.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "catsbury25",
        database: "catsbury",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
    .promise();

app.get("/", (req, res) => {
    res.json({ message: "Data found!" });
    console.log(res);
});

// Get all cats
app.get("/cats", (req, res) => {
    const sql = "SELECT * FROM cats";
    pool.query(sql)
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Database query failed" });
        });
});
app.get("/cats/:id", (req, res) => {
    const sql = "SELECT * FROM cats WHERE id = ?";
    pool.query(sql, [req.params.id])
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Database query failed" });
        });
});
app.delete("/cats/:id", async (req, res) => {
    const id = req.params.id;
    const cat = await deleteCat(id);
    res.send(cat);
});

app.put("/cats/:id", async (req, res) => {
    const {id, name, sex, dob, description} = req.body.data;
    const cat = await updateCat(id, name, sex, dob, description);
    res.send(cat);
});

app.post("/cats", async (req, res) => {
    console.log(req.body);
    const { name, sex, dob, description } = req.body.data;
    const cat = await createCat(name, sex, dob, description);
    res.send(cat);
});
// Get specific cat
export async function getCat(id) {
    const [rows] = await pool.query("SELECT * FROM cats WHERE id = ?", [id]);
    return rows;
}
// Create cat
export async function createCat(name, sex, dob, description) {
    const [result] = await pool.query(
        `INSERT INTO cats
        VALUES (DEFAULT, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
        [name, sex, dob, description]
    );
    const resultId = result.id;
    return getCat(resultId);
}

export async function updateCat(id, name, sex, dob, description) {
    const [result] = await pool.query(
        `UPDATE cats
        SET name = ?, sex = ?, dob = ?, description = ?
        WHERE id = ?`,
        [name, sex, dob, description, id]
    );
    const resultId = result.id;
    return getCat(resultId);
}
// Delete cat
export async function deleteCat(id) {
    const [result] = await pool.query("DELETE FROM cats WHERE id = ?", [id]);
    return result;
}

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
