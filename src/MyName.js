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

// MyName.defaultProps = { name: '기본이름' };

export default MyName;
