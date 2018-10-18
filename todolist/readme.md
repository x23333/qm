
- 后端模板里有 if else for 指令
  模板里存在业务逻辑 wx:if wx:else wx:for

  界面状态 登录前，登录后

  数据驱动界面状态
  如 hasUserInfo 决定了界面有两种 wx:if wx:else

- 微信的生态及机制
  小程序， 获取用户信任和信息， 在微信里，
  小程序分享到讨论组

  用户信息， 隐私， 要获取用户授权

  button 询问 特殊的 open-type="getUserInfo"
  bindgetUserInfo='getUserInfo'
  block 显示的过程
  有丶直接

- setData()
  改变Data里数据的值
  并且拥有让界面里相关的部分热更新的能力

- wx:key
  循环一定要加唯一性的key
  列表值发生改变， 如果更换替换， 整个列表的wxml， 太浪费
  key， 找到相应的那个进行更新