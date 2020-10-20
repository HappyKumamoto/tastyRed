
let header = document.getElementById('header');
let degree = 0; //角度

function rotateHeader() {
    degree += 6  ;
    degree = degree % 360;
 if ( ( 90<=degree && degree <270) ) {
      header.className = 'face';  //表面のclassを設定
  } else {
      header.className = 'back'; //裏面のclassを設定
  }
  //3Dで動かす
  header.style.transform = 'rotate3D(1,1,1,'+ degree+'deg)';
}
setInterval(rotateHeader, 150);
//ゆったり回る感じ
//150ミリ秒ごとにrotateHeader関数を実行する


//回答欄とその下部分
'use strict';
const answerInput = document.getElementById('answer');
const assessmentButton =    document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = ( ) => {
const answer = answerInput.value;

     if(answer.length===0) { //空欄の時は処理を終了
        return;
    };
    
   if(answer==='くまもと') {   //正解の時のみ、応募フォームを表示する
        document.getElementById('result-area').innerHTML=(`大正解！<br>九州 くまもとの「とまと」
        「赤牛」<br>「車海老」「天草大王(赤鶏)」他<br>盛りだくさんの中から美味なる
        <span style="color:tomato; font-size:160%;">赤</span><br>
        をお選びください！<br> 
        <a href = "https://secret-shore-96743.herokuapp.com/enquetes/tasty-red" target="_blank">
        ご応募はこちら(Heroku)</a> </p>`);     }else{
        document.getElementById('result-area').innerHTML=`おしいです！<br>
        再度挑戦してみてください！`;
    };
 };
 
 //エンターキーでも機能する
  answerInput.onkeydown = event => {
    if (event.keyCode === 13) {
      assessmentButton.onclick();
    }
  };
  
