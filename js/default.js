//document.getElementById('choice').textContent = new Date();

//window.alert('こんにちは世界！');

//console.log('こんにちは世界！');

//var result = window.confirm('準備OK?');

//document.getElementById('choice').textContent = result;

//if(result){
//  document.getElementById('choice').textContent = 'OKが押されました';
//}
//else{
//  document.getElementById('choice').textContent = 'キャンセルが押されました';
//}

var number = Math.floor(Math.random() * 50);
var flg = true;
while(flg){
  var answer = parseInt(window.prompt('数あてゲーム。0~50の数字を入力してください！'));
  var message;
  if(answer === number){
  message = '正解で～～す';
  flg = false;
  }
  else if(answer < number){
 message = '答えはもっと大きい数字で～す'; 
  }
  else if(number < answer){
  message = '答えはもっと小さい数字で～す'; 
  }
  else{
  message = '0~3の数字を入力してください';
  }

  document.getElementById('choice').textContent = message;
}
