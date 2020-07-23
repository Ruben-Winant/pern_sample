import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Newsarticle } from "../../components/news/Newsarticle";

function App() {
  return (
    <div>
      <Newsarticle
        content="dit is het eerste artikel van de site."
        titel="Zaal wapens en harnassen"
        image_path="museum.png"
      />
    </div>
  );
}

export default App;
