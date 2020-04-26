import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MyName />
        {/* <MyName name="리엑트" /> */}
        <div>
          {/*주석을 남긴다.*/}
          <h1 className="App">안녕하세요 리액트</h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
