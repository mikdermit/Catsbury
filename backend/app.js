import express from "express";
import { getCats, getCat, createCat, deleteCat } from "./src/db.js";
import cors from "cors"; // For handling CORS issues

const app = express();
app.use(express.json());
app.use(cors());
app.set('json spaces', 2);

app.get("/cats", async (req, res) => {
    const cats = await getCats();
    res.send(cats);
});

app.get("/cats/:id", async (req, res) => {
    const id = req.params.id;
    const cat = await getCat(id);
    res.send(cat);
});

app.post("/cats", async (req, res) => {
    const {id, name, sex, dob, description} = req.body;
    const cat = await createCat({id, name, sex, dob, description});
    res.send(cat);
});

app.delete("/cats/:id", async (req, res) => {
    const id = req.params.id;
    const cat = await deleteCat(id);
    res.send(cat);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;