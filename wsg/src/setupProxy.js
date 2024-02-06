const { createProxyMiddleware } = require('http-proxy-middleware'); // 라이브러리 불러오기

module.exports = function(app) {
    app.use(
      '/v1/beta', //proxy가 필요한 path parameter를 입력.
      createProxyMiddleware({
        target: 'https://api.openai.com', //타겟이 되는 api url를 입력.
        changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분.
      })
    );
  };