  var ajax = {
    request: function (url, method, nameOfTheFunction, data) {
      // 1. 创建连接
      var xhr = null;
      xhr = new XMLHttpRequest()
      // 2. 连接服务器
      xhr.open(method, url, true)
      // 3. 发送请求
      if (method == "post") {
        xhr.send(data);
      } else {
        xhr.send(null);
      }
      // 4. 接受请求
      xhr.onreadystatechange = nameOfTheFunction;
    }
  }