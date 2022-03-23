type Method = "GET" | "POST" | "UPDATE" | "DELETE";

interface Ajax {
  (
    method: Method,
    url: string,
    data: any,
    success: Function,
    error: Function
  ): void;
}

const ajax: Ajax = (method, url, data, success, error) => {
  const request = new XMLHttpRequest();

  request.open(method, url);

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // 0: 代理创建
      // 1: open 方法被调用
      // 2: send 方法被调用
      // 3: 下载中,4: 下载操作完成
      // 具体参考https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
      if (
        (request.status > 200 && request.status < 300) || // 状态码在 200 -300 为成功
        request.status === 304 // 状态码为304内容未被更改  // 具体参考 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
      ) {
        success(request);
      } else {
        error(request);
      }
    }
  };

  request.send(data);
};
