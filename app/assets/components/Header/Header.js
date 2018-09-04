import React from 'react'
import { NavLink } from 'dva/router'

import style from './Header.css'
import Logo from './image/logo.svg'

const Header = () => {
  return (
    <div className={style.HeadHeader}>
      <div className={style.HeaderBox}>
        <div className={style.Logo}>
          <div className={style.box}>
            <img src={Logo} alt='Logo' />
          </div>
        </div>
        <div className={style.Nav}>
          <ul>
            <li>
              <NavLink to='/home' activeClassName={style.NavActive}>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/count' activeClassName={style.NavActive}>MySQL</NavLink>
            </li>
            <li>
              <NavLink to='/mock' activeClassName={style.NavActive}>LOGIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
