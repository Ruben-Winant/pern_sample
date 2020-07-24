import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateArticleForm } from "../../components/news/CreateArticleForm";
import { Newsarticle } from "../../components/news/Newsarticle";
import News from "./../../components/news/News";
import { NewsCarousel } from "../../components/news/NewsCarousel";

function App() {
  let n: News = {
    titel: "eerste artikel",
    content:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    plaatsDatum: "25-07-2020",
    image_path: "gang.jpg",
  };

  let n1: News = {
    titel: "eerste artikel 2",
    content:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    plaatsDatum: "25-07-2020",
    image_path: "gang.jpg",
  };

  let n2: News = {
    titel: "eerste artikel 3",
    content:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    plaatsDatum: "25-07-2020",
    image_path: "gang.jpg",
  };

  return (
    <div>
      <NewsCarousel articles={[n, n1, n2]} />
      <br />
      <Newsarticle news={n} />
      <br />
      <CreateArticleForm />
      <br />
    </div>
  );
}

export default App;
