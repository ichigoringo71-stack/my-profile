// 1. HTMLの要素を取得する（リモコンでテレビを操作する準備）
const messageText = document.getElementById("message");
const myButton = document.getElementById("btn");

// 2. ボタンがクリックされた時の処理を決める
myButton.addEventListener("click", () => {
    // 3. メッセージの中身を書き換える
    messageText.textContent = "JavaScriptで書き換えました！";
    // ついでに色も変えてみる
    messageText.style.color = "red";
});

// 1. カウントを保存しておく「変数」を作る
let count = 0;

// 2. HTMLの要素（ボタンと数字）をJavaScriptで操作できるように取得する
const btn = document.getElementById("like-btn");
const display = document.getElementById("like-count");

// 3. ボタンがクリックされた時の動き（イベント）を登録する
btn.addEventListener("click", () => {
    // クリックされたらカウントを1増やす
    count = count + 1;
    
    // 増えた数字を画面に反映させる
    display.textContent = count;
    
    // コンソールにも表示してみる（デバッグ用）
    console.log("現在のいいね数:", count);
});