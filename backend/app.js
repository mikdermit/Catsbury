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
    console.log(res)
});

app.get("/cats/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const cat = await getCat(id);
    console.log(res)
    res.send(cat);
    
});

app.post("/cats", async (req, res) => {
    console.log(req.body);
    const { name, sex, dob, description } = req.body.data;
    const cat = await createCat(name, sex, dob, description);
    res.send(cat);
});

app.put("/cats/:id", async (req, res) => {
    const {id, name, sex, dob, description} = req.body.data;
    const cat = await updateCat(id, name, sex, dob, description);
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

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;