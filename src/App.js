import React, { Component } from "react";
import Addjob from "./components/Addjob";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Joblist from "./components/Joblist";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: []
    };
  }
  // async componentDidMount() {
  //   let responce = await fetch("http://localhost:3001");
  //   let json = await responce.json();
  //   console.log("json", json);
  //   this.setState({
  //     jobList: json.data
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Joblist />
        <Addjob />
        <Footer />
      </div>
    );
  }
}

export default App;
