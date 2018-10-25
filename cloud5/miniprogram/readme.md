- 文件上传
  云服务器 买服务器， 要的就是ip(cdn 绑定域名) 磁盘空间(文件 数据的存储) CPU计算 数据存储(mongodb) node(npm node v8.0以上)的运行环境及操作系统(linux centos)

  云服务 全部sdk 化了
    数据存储 wx.cloud.database
    文件存储 wx.cloud.uploadFlie
      文件流 打开出口(path) 入口(path)  在硬盘中的路径
        wx.cloud.uploadFlie({
          cloudPath: 打开文件可写流
          filePath: 打开文件可读流
        })
  云函数 wx.cloud.callFunction
      wx.cloud.websdk