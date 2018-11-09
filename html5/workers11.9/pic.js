self.addEventListener('message', function(e){
  var data = e.data;
  // console.log(data)
  for (let item of data.pics) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', item.src, true);
    xhr.responseType = 'blob';
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4) {
        // console.log(xhr.response);
        if (xhr.response) {
          self.postMessage({
            id: item.id,
            result: xhr.response
          })
        }
        
      }
    }
    xhr.send();
  }
})