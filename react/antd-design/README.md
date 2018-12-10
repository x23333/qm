1. 一切资源皆可打包 webpack bundle
import logo from './logo.svg' 图片可以引入js中 可以参与js 的运算及赋值 

2. 路由接管一切， 配置在最前面
  有两种路由 BrowserRouter  HashRouter(兼容性好 IE9 以上)
  history.pushState(state(拿到的数据), title(修改的title), url(push的url))