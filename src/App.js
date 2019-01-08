import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import logo from './logo.svg';
import './App.css';
import Demo from './demo';
const DecoratorTest = props => {
  return(
    <Demo />
  )
};

const CustomIcon = () => {
  const viewBox = 36;
  const iconSize = 20;
  const pad = (viewBox - iconSize) / 2;
  const center = viewBox / 2;

  return(
    <div><button>test</button></div>
  )
}

class MyNetwork extends Component {
  render() {
    return(
    <Network>
    <Node id='vader' decorator={DecoratorTest} />
    <Node id='luke' decorator={DecoratorTest} />
    <Node id='leia' decorator={DecoratorTest} />
    <Edge id='1' from='vader' to='luke' />
    <Edge id='2' from='vader' to='leia' />
    </Network>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNetwork />
      </div>
    );
  }
}

export default App;
