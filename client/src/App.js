import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from "./components/PlayerCard.js";
import styled from "styled-components";

const Button = styled.button`
  width:350px;
  height: 100px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  :hover {
    box-shadow: 0 14px 28px rgba(19, 128, 19, 0.25), 0 10px 10px rgba(19, 128, 19, 0.22);
    border-radius: 5%;
    border: green 1px solid;
    background: white;
  }
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    }    
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        })
      })
      .catch(error => console.log(error))
  }
  
    render() {
      return (
        <div className="App">
          
          <div className="container">
            <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>

            <Button type="submit">Dark Mode</Button>

            <div>
              { this.state.players.map(item => ( 
                  <PlayerCard playerInfo={item} key={item.id}/> 
              ))}
            </div>
          </div>
        </div>
      );
    }
}

export default App;