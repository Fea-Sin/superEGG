import React from 'react'
import { Button } from 'antd'

import style from './Hello.css'

const Hello = () => (
  <div>
    <div className={style.hello}>HELLO WORLD</div>
    <div><Button type='primary'>全栈开发</Button></div>
    <div className="testCss">TEST CSS</div>
  </div>
)

export default Hello
