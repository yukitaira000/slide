const slideImg = function (){
  const images = document.querySelectorAll('.img-box ul.img-list li'),
        // HTMLの.img-box > ul.img-list > li内の要素を取得し、定数slideImgに代入

        imagesLength = images.length - 1,
        // lengthを取得すると「4」が取得されるため、要素のindex番号に合わせるため、-1をした数字をimagesLengthに代入する

        next = document.getElementById('next-img'),
        // HTML内の#next-imgを取得しnextに代入

        prev = document.getElementById('prev-img');
        // HTML内の#prev-imgを取得しprevに代入

  let count = 0;
  // countの値を0にする

  function showNext () {
    // nextボタンの動作を設定
    if (count >= imagesLength) {
      // countの値が（imgLength＝3）以上になった場合

      count = 0;
      // countを0にする

      images.item(count).classList.add('active');
      // 一枚目の画像にactiveクラスを付与する

      images.item(imagesLength).classList.remove('active');
      // imagesLengthの中にactiveクラスが付いているものがあれば削除する

      clearInterval(slideTimer);
      // タイマーの動作を止める

      slideTimer = null;
      // slideTimerの値をnullにする

    }else {
      // countの値がimgLength以下の場合
      images.item(count).classList.remove('active');
      // countの値に合った画像に付いているactiveクラスを削除する

      images.item(count + 1).classList.add('active');
      // 次の画像にactiveクラスを付与する

      count = count + 1;
      // constに1を足す

      clearInterval(slideTimer);
      // タイマーの動作を止める

      slideTimer = null;
      // slideTimerの値をnullにする

    }
    slideCount();
    // slideCountを呼び出し、タイマーを動作
  }

  function showPrev () {
    // prevボタンを押した時の動作を設定

    if (count === 0) {
      // countの値が0だった場合

      images.item(count).classList.remove('active');
      // 一枚目の写真に付いているactiveクラスを削除する

      images.item(imagesLength).classList.add('active');
      // 4枚目の写真にactiveクラスを付与する

      count = imagesLength;
      // countに3を代入　3＝imgLength

      clearInterval(slideTimer);
      // タイマーの動作を止める

      slideTimer = null;
      // slideTimerの値をnullにする


    }else {
      // countが0以外の場合

      images.item(count).classList.remove('active');
      // 現在のcountの画像に付いているactiveクラスを削除

      images.item(count - 1).classList.add('active');
      // 現在のcountから1を引いた画像にactiveクラスを付与
      //（ 一つ前の画像にactiveクラスを付与）

      count = count - 1;
      // 現在のcountの値から1を引く

      clearInterval(slideTimer);
      // タイマーの動作を止める

      slideTimer = null;
      // slideTimerの値をnullにする


    }
    slideCount();
    // slideCountを呼び出し、タイマーを動作
  }

  next.addEventListener('click', showNext);
  // nextボタンをクリックした時、showNextの動作を行う

  prev.addEventListener('click', showPrev);
  // prevボタンをクリックした時、showPrevの動作を行う


  // タイマーの動きの設定
  const timer = function(){
    if (count >= imagesLength) {
      // countの値が（imgLength＝3）以上になった場合

      count = 0;
      // countを0にする

      images.item(count).classList.add('active');
      // 一枚目の画像にactiveクラスを付与する

      images.item(imagesLength).classList.remove('active');
      // imagesLengthの中にactiveクラスが付いているものがあれば削除する

    }else {
      // countの値がimgLength以下の場合
      images.item(count).classList.remove('active');
      // countの値に合った画像に付いているactiveクラスを削除する

      images.item(count + 1).classList.add('active');
      // 次の画像にactiveクラスを付与する

      count = count + 1;
      // constに1を足す
    }
  }

  let slideTimer = null;
  // slideTimerにnullを設定

  const slideCount = function(){
    // slideCountに関数を設定

    if(slideTimer == null) {
      // slideTimerの値がnullだった場合

      slideTimer = setInterval(timer, 5000);
      // slideTimerにsetIntervalを代入する
      // 呼び出す関数はtimerを呼び出し5秒ごとに処理を行う
    }
  }

  slideCount();
  // slideCountを呼び出し、タイマーを動作　　画面読み込み時に動作させるために呼び出す
}

slideImg();
// slideImg関数を呼び出す