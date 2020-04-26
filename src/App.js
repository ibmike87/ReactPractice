import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        {
          //render 내부에서 주석을 남긴다
        }
        {/* render 내부에서 주석을 남긴다. */}
        <div>
          {/* <MyName name="리엑트" /> */}
          <h1 className="App">안녕하세요 리액트</h1>
        </div>
        <div>
          <h3>MyNameComponent</h3>
          {/* 전달하는 기본 props 가 있는 경우 */}
          {/*
            props 는 부모가 자식에게 전달만 가능하고
            자식은 호출만 가능하다.
            해당 props 는 this.props.name 으로 전달된다
          */}
          <MyName name="RexPack" />
          {/* 전달하는 기본 props 가 없는 경우 */}
          <MyName />
        </div>
      </Fragment>
    );
  }
}

export default App;
