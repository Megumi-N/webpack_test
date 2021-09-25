const path = require("path");

module.exports = {
  entry: "./src/index.js", //エントリポイント（デフォルトと同じ設定）
  output: {
    //出力先（デフォルトと同じ設定）
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", //モード
  // module: {
  //   rules: [
  //     {
  //       test: /\.css/,
  //       use: [
  //         "style-loader",
  //         {
  //           loader: "css-loader",
  //           options: { url: false },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
