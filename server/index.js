const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes and queries
//#region NEWS

//get all news articles
app.get("/news", async (req, res) => {
  try {
    const allNews = await pool.query(
      "SELECT * FROM newsarticle ORDER BY placeddate"
    );
    res.json(allNews.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one news article
app.get("/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newsarticle = await pool.query(
      "SELECT * FROM newsarticle WHERE id = $1",
      [id]
    );
    res.json(newsarticle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//create one news article
app.post("/news/create", async (req, res) => {
  try {
    const { title, content, image_path } = req.body;
    const placedDate = (
      new Date().getDate() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear()
    ).toString();
    const newArticle = await pool.query(
      "INSERT INTO newsarticle (title, content, image_path, placeddate) VALUES ($1,$2,$3,$4) RETURNING *",
      [title, content, image_path, placedDate]
    );

    res.json(newArticle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//edit one news article
app.put("/news/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image_path } = req.body;
    const editedArticle = await pool.query(
      "UPDATE newsarticle SET title=$1, content=$2,image_path=$3 WHERE id=$4 RETURNING *",
      [title, content, image_path, id]
    );
    res.json("updated article with id: " + id);
  } catch (err) {
    console.error(err.message);
  }
});

//delete one news article
app.delete("/news/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removedItem = pool.query("DELETE FROM newsarticle WHERE id=$1", [id]);
    res.json("remove article with id: " + id);
  } catch (err) {
    console.error(err.message);
  }
});

//#endregion

//EVENTS
//get all events
//get one event
//create one event
//edit one event
//delete one event

app.listen(5000, () => {
  console.log("Server has starter on port 5000");
});
