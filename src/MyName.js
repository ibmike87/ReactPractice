/**
// 함수형 컴포넌트 예시.
// 함수형 컴포넌트와 기본 컴포넌트 생성방식의 가장 큰 차이점은, stat와 lyfeCycle 이 없다는 점.
// 함수형이 메모리자원 덜 사용, 기본 mount 속도가 조금 더 빠름.
// 간단한 표시용도로면 함수형 컴포넌트를 사용함.

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
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
