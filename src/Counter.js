import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  /**
   * 여기서 왜 화살표 함수로 handleIncrease 를 만들었는지에 대한 설명
   * 이 안에서 호출하는 this를 화살표 함수가 아닌 일반 함수로 호출하게 되면
   * thif 가 현재 class 객체인지 찾지 못하는 문제가 있으므로 위의 constructor 함수에서
   * super 함수로 props 를 선언받고, 현재 this의 handleIncrease 함수에 this 값을
   * 별도로 바인딩해주는 절차가 필요하게 됨.
   */

  // handleIncrease() {
  //   console.log(this);

  //   this.setState({
  //     number: ++this.state.number
  //   });
  // }

  /*
    state 는 내부에서 변경이 가능함.
    state에 접근할 때는 setState, getState로만 접근가능
    this.state.val = this.state.val + 1 이런식이면
    state 에서 변경되었다는 change 이벤트가 동작되지 않으니 주의
  */
  handleIncrease = () => {
    this.setState({
      number: ++this.state.number
    });
  };

  handleDecrease = () => {
    this.setState({
      number: --this.state.number
    });
  };

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}> + </button>
        <button onClick={this.handleDecrease}> - </button>
      </div>
    );
  }
}

export default Counter;
