const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  // 이미지 파일에 해시를 추가하는 설정
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[contenthash:8].[ext]',
          esModule: false,
        },
      },
    ],
  })
); 