# super-egg

> A full stack node project about [egg](https://eggjs.org/zh-cn/intro/quickstart.html)

## 开发

```bash
npm install
npm run dev
open http://localhost:7001/
```

## 部署

```bash
// 打包
npm run build

// 启动服务
npm start
open http://localhost:7001/
```

## 注意事项

前端部分默认使用的是 React 技术栈，React 技术在前端扮演越来越重要的角色，
所以你也应该以此作为开始

### css 写法

项目前端部分默认使用的是 [roadhog](https://github.com/sorrycc/roadhog) 构建，
roadhog 默认使用 [CSS Modules](https://github.com/css-modules/css-modules) 模块,
所以在写 css 应当遵循 CSS Modules 写法

正确示例：
```js
// css
/* style.css */
.className {
  color: green;
}

// component
import style from './style.css'
<div className={style.className}>HELLO WORLD</div>
```

错误写法：
```js
// component
import './style.css'
<div className="className">HELLO WORLD</div>
```

## 介绍

node 全栈开发，集成前端工程化，从开发到部署一气呵成
