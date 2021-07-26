/*
    函数必须由 function 函定义, 不能是箭头函数. 因为 webpack 要改变此函数的 this 指向
*/

const sleep = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });

const replace = function (content) {
  console.log('进入 async-loader.js');

  const callback = this.async();

  (async () => {
    console.log('开始异步编译');
    await sleep(3000);
    const result = content.replace(
      /wy5211_cn/g,
      'wy5211_cn: http://www.xinglong.tech'
    );
    console.log('编译结束');
    callback(null, result);
  })();
};
module.exports = replace;
