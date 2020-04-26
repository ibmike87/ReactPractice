/**
//이 아래 부분은 함수형 컴포넌트를 만드는 방법임. 
//(기본적으로 간단하게 컴포넌트를 작성할 때 사용하는 방법)

import React from 'react';  // 함수형 컴포넌트에서는 별도로 Component 를 import 할 필요가 없음.

const MyName = ({ name }) => {  //name 부분은 실제로 전달받는 this.props.name 부분
  return <div>안녕하세요! 제 이름은 {name} 입니다. </div>;  //name 할당된 컴포넌트
};

MyName.defaultProps = { name: '기본이름' }; // 전달받는 props.name 값이 없을때 사용하는 default 값

*/

import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본 이름'
  };

  render() {
    return (
      <div>
        Hello my name is <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
