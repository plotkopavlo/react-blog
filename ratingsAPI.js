/* eslint no-console: 0 */
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const buffer = fs.readFileSync("./data-blog.json");
const postsObj = JSON.parse(buffer);

const app = express();
app.use(cors());

app.get("/:id", (req, res) => {
  const post = postsObj.posts.find(item => {
    console.log(item.id);
    console.log(req.params.id);

    return item.id == req.params.id;
  });
  console.log(req.params.id);

  if (post) {
    res.json(post);
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: "post not found" });
  }
});

console.log(`Starting server on port 3000`);
console.log(`Generating new random ratings`);
app.listen(3000);
