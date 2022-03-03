
const images = document.querySelectorAll('.img-box ul.img-list li');
const imagesLength = images.length - 1;
// imagesLengthの値が4になるため、-1をし値を合わせる

const next = document.getElementById('next-img');
// HTML内の#next-imgを取得しnextに代入

const prev = document.getElementById('prev-img');
// HTML内の#prev-imgを取得しprevに代入
const addClass = function() {
  images.item(count).classList.add('active');
  // 表示されているページにactiveクラスをつける
};

const removeClass = function() {
  images.item(imagesLength).classList.remove('active');
  // 表示されていたページに付いていたactiveクラスを削除する
};

const countRemove = function() {
  images.item(count).classList.remove('active');
};

let count = 0;
let slideTimer = null;


const slideImg = function() {

  const slideMotion = function() {
    if(count >= imagesLength) {
      count = 0;
      addClass();
      removeClass();
      // countの数値がLengthよりも大きくなる場合、countの値を0に。
      // 1ページ目にactiveクラスをつける。
      // 最後のページに付いていたactiveクラスを削除する
    } else {
      countRemove();
      count = count + 1;
      addClass();
      // countがLengthより小さい場合、現在表示されている画像のactiveクラスを削除
      // countに＋1する
      // そのページにactiveクラスをつける
    }
  }

  const slider = function() {
    if(slideTimer == null) {
      slideTimer = setInterval(slideMotion, 5000);
      // 5秒間隔でtimer関数の処理を実施する
    }
  }

  const resetTimer = function() {
    clearInterval(slideTimer);
    slideTimer = null;
    slider();
    // timerを一度止める
    // slideTimerの値をnullにする
    // 再度timerCount関数を呼び出しタイマーを動作させる
  }

  next.addEventListener('click', function() {
    slideMotion();
    resetTimer();
    // 右向きのボタンをクリックしたときに、slideMotion関数を呼び出す。
    // タイマーを一度とめて1秒からカウントをさせるためにresetTimer関数を呼び出す
  })

  prev.addEventListener('click', function() {
    countRemove();
    if(count === 0) {
      images.item(imagesLength).classList.add('active');
      count = imagesLength;
      // 左向きのボタンをクリック時に、countの値が0の時は最初のページに付いているactiveクラスを削除
      // 最後のページにactiveクラスをつける
      // countに3を代入する
    } else {
      count = count - 1;
      addClass();
      // countの値が0以外の時は現在表示されているページのactiveクラスを削除
      // countの値から1を引く
      // 1引いた後のcountの値のページにactiveクラスをつける
    }
    resetTimer();
  })
  slider();
}

slideImg();