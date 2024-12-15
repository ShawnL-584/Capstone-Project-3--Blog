import express from "express";
import { currentDate, data } from "./items.js";

let posts = data.posts;
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { currentDate, posts: posts.slice().reverse() });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.post("/contact", (req, res) => {
  res.redirect("/");
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.get("/post/view/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  let post = posts.find((post) => post.id === postId);

  if (post) {
    res.render("views.ejs", { post });
  } else {
    res.status(404).send("Page not found");
  }
});

app.get("/post/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  let post = posts.find((post) => post.id === postId);

  if (post) {
    res.render("edit.ejs", { post });
  } else {
    res.status(404).send("Page not found");
  }
});

app.post("/post", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    date: `${currentDate}`,
    content: req.body.content,
  };
  posts.push(newPost);
  console.log("New post added.");
  res.redirect("/");
});

app.post("/post/edit/:id", (req, res) => {
  posts.forEach((post) => {
    if (post.id == req.params.id) {
      post.title = req.body.title;
      post.content = req.body.content;
    }
  });
  console.log("Post saved.");
  res.redirect("/");
});

app.post("/post/delete/:id", (req, res) => {
  let postId = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== postId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
