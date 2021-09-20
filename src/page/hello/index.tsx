import { Button } from 'antd'
import React, { Component } from 'react';
import style from './index.less';

export default class Hello extends Component {
  render() {
    return (
      <div  className={style.box}>
        <h3 className='redText'>hello page</h3>
        <h3>hello page2</h3>
        <Button type='primary'>button</Button>
      </div>
    )
  }
}
