import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateArticleForm } from "../../components/news/CreateArticleForm";
import { Newsarticle } from "../../components/news/Newsarticle";
import News from "./../../components/news/News";
import { NewsCarousel } from "../../components/news/NewsCarousel";

interface AppState {
  news: News[];
}
interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    try {
      fetch("http://localhost:5000/news")
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            news: data,
          });
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return (
      <div>
        <br />
        <NewsCarousel articles={this.state.news} />
        <br />
        <br />
        <CreateArticleForm />
        <br />
      </div>
    );
  }
}

export default App;
