/*
    函数必须由 function 函定义, 不能是箭头函数. 因为 webpack 要改变此函数的 this 指向
*/

const replace = function (content) {
  console.log('进入 replace-loader.js');
  return content.replace(/wy5211/g, 'wy5211_cn');
};
module.exports = replace;
