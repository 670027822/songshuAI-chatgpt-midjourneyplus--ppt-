// function huoquurl(imgsup3) {
//   let img34 = JSON.parse(imgsup3);
//   let urlkeai = 'https://gpt.mylaws.top/imgs/keai.jpg';
//   // 提取image_url的值
//   let url = img34[0].image_url;
//   console.log('biaoji818');
//   axios({
//     method: 'POST',
//     url: 'http://gpt.mylaws.top/upload.php',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//     },
//     data: {
//       url: url,
//     },
//   }).then(
//     (response) => {
//       let url44 = response.data;
//       // 用新值替换掉原来的image_url的值
//       // img34[0].image_url = url44;
//       img34[0].image_url = urlkeai;
//       return img34;
//     },
//     (error) => {
//       console.log('请求失败', error);
//     },
//   );
// }

// let newObject = { type: 'text', text: messagesHistory[messagesHistory.length - 1].content };
// img34.unshift(newObject);
// messagesHistory[messagesHistory.length - 1].content = img34;
// console.log('biaoji989');
// console.log(messagesHistory);
