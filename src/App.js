
import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import DevRouter from './devRouter'

export default class App extends React.Component {


  componentDidMount() {
    
  }

  render() {

    return (

      <HashRouter>
        <DevRouter />
      </HashRouter>

    );
  }
}
