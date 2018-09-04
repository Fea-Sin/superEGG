import dva from 'dva'

import './index.css'

// 1. Initialize
const app = dva({
  // 初始化数据
})

// 2. Plugins
// app.use({})

// 3. Model
// app.model()

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
