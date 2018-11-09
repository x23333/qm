// 接受消息
self.addEventListener('message', function(e) {
  console.log(e)
  var data = e.data;
  switch(data.cmd) {
    case 'start': 
      self.postMessage('WORKER STARTED:' + data.msg)
      break;
    case 'stop':
      self.postMessage('WORKER STOPPED:' + data.msg)
      break;
  }
})