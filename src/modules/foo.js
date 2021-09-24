let stop;
let progress;
let addition = 0;

const record = document.querySelector("p.counter");

const resultDialog = document.getElementById("resultModal");
const resultmodalTitle = document.getElementById("resultModalLabel");
const resultmodalBody = document.getElementById("resultmodalBody");

const stopButton = document.querySelector("button.stop");

const startDialog = document.getElementById("startModal");
const startButton = document.getElementById("start");

// モーダルの表示に関する関数
const modal = function () {
  resultDialog.tabIndex = "-1";
  resultDialog.ariaModal = "true";
  resultDialog.role = "dialog";
  resultDialog.style = "display: block;";
  resultDialog.classList.add("show");
  resultDialog.setAttribute("aria-hidden", "true");
};

window.onload = () => {
  startDialog.tabIndex = "-1";
  startDialog.ariaModal = "true";
  startDialog.role = "dialog";
  startDialog.style = "display: block;";
  startDialog.classList.add("show");
};

// タイマー
function timer() {
  const start = new Date().getTime();
  stop = setInterval(function () {
    progress = new Date().getTime() - start + addition;
    const noms = progress / 1000;
    const millisecond = progress
      ? ("0" + String(noms).split(".")[1]).slice(-2)
      : "00";
    const nos = Math.trunc(noms);
    // 一日24時間×60分×60秒＝86,400秒
    const second = nos ? ("0" + (((nos % 86400) % 3600) % 60)).slice(-2) : "00";

    if (progress < 10000) {
      record.textContent = second + "." + millisecond;
    } else if (10000 <= progress) {
      modal();
      clearInterval(stop);
      record.innerText = "10.00";
      resultmodalTitle.innerText = "焦げた...";
      resultmodalBody.innerHTML =
        "<p>焼き過ぎってレベルじゃない</p>\
        <p>センスないどころじゃない</p>\
        <p>火を扱わないで欲しいレベル</p>\
        <a href='http://twitter.com/share?url=[シェアするURL]&text=[ツイート内テキスト]&via=[ツイート内に含むユーザ名]&related=[ツイート後に表示されるユーザー]&hashtags=[ハッシュタグ]' target='_blank'>ツイート</a>";
    }
  }, 10);
}

stopButton.addEventListener("click", function () {
  clearInterval(stop);
  modal();
  if (progress <= 4300) {
    resultmodalTitle.innerText = "生焼けやないかい!";
    resultmodalBody.innerHTML =
      "<p>生だよ！</p>\
      <p>お腹壊すよ！</p>\
      <p>せっかちがすぎるよ!！</p>\
      <p>さんまをよく見て、もう一度やってみよう。</p><p>ワンチャンあるかも。</p>";
  } else if (progress < 4700) {
    resultmodalTitle.innerText = "完璧！！";
    resultmodalBody.innerHTML =
      "<p>もしかして...職人？？？</p>\
      <p>並び立つものがいないくらいさんまを焼く技術に溢れてるかも...</p>\
      <p>さんま焼き職人に転職しよう！</p>";
  } else if (4700 <= progress) {
    resultmodalTitle.innerText = "焦げ臭い...";
    resultmodalBody.innerHTML =
      "<p>焼き過ぎじゃない？??</p>\
      <p>さんまの気持ちになってもう一回やってみて!!</p>";
  }
});

startButton.addEventListener("click", function () {
  startDialog.remove();
  document.getElementById("nama").classList = "namasakana";
  document.getElementById("yaki").classList = "yakisakana";
  document.getElementById("koge").classList = "kogesakana";
  document.getElementById("stopButton").disabled = "";
  progress = 0;
  timer();
});
