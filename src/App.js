import React, { Component } from 'react';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Editor from './components/Editor';
import './styles/reset.scss';
import Main from './Main';
import Header from './components/Header';
//import MobileFooter from './components/MobileFooter';
/*
  history
  match
  location
*/
class App extends Component {
  render() {
    return (
      <Router className="App">
        <div className="wrapper">
          <Header />
          <Route exact path="/" component={Main}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/editor" component={Editor} />
          
        </div>
      </Router>
    );
  }
}

export default App;


/* <Link exact to="/">메인으로</Link><br/>
            <Link exact to="/detail">디테일 페이지</Link><br/>
            <Link exact to="/editor">에디터 페이지</Link><br/>
            <Link to="/detail/:id">1 디테일 페이지</Link><br/>
            <Link to="/detail/:idasdas">2 디테일 페이지</Link> */