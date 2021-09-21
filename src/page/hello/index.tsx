import { Button } from 'antd'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './index.less';


class Hello extends Component<any, any> {
  componentDidMount() {
    console.log(this.props)
  }

  handleDispatch = () => {
    this.props.dispatch({ type: 'USER_SET', data: { name: 'xiaoming'}, ff: 123 });

  }

  render() {
    return (
      <div className={style.box}>
        <h3 className='redText'>hello page</h3>
        <h3>hello page2</h3>
        <Button type='primary' onClick={this.handleDispatch}>dispatch</Button>
      </div>
    )
  }
}

export default connect(state => (state), dispatch => ({ dispatch }))(Hello);
