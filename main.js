const slideImg = function (){
  const images = document.querySelectorAll('.img-box ul.img-list li'),
        // HTMLの.img-box > ul.img-list > li内の要素を取得し、定数slideImgに代入

        imagesLength = images.length - 1,
        // imagesLengthの値が4になるため、-1をし値を合わせる

        next = document.getElementById('next-img'),
        // HTML内の#next-imgを取得しnextに代入

        prev = document.getElementById('prev-img'),
        // HTML内の#prev-imgを取得しprevに代入

        addClass = function() {
          images.item(count).classList.add('active');
        },
        // activeクラスをつける関数を設定
        // 表示されているcountにactiveクラスをつける

        removeClass =function () {
          images.item(imagesLength).classList.remove('active');
        };
        // activeクラスが付いていた場合削除する関数を設定

        countRemove = function () {
          images.item(count).classList.remove('active');
        }

  let count = 0,
      // カウントの初期値を設定

      slideTimer = null;
      // slideTimerの初期値を設定

      // タイマーの動き
      const timer = function(){
        if (count >= imagesLength) {
          // countの値が（imgLength＝3）以上になった場合
    
          count = 0;
          // countを0にする

          addClass();
          // 一枚目の画像にactiveクラスを付与する

          removeClass();
          // imagesLengthの中にactiveクラスが付いているものがあれば削除する
    
        }else {
          // countの値がimgLength以下の場合
          countRemove();
          // countの値に合った画像に付いているactiveクラスを削除する

          count = count + 1;
          // constに1を足す

          addClass();
          // 次の画像にactiveクラスを付与する
        }

      }

      // ボタンを押した時にタイマーを一から起動しなおす設定
      const slideCount = function(){
          // slideCountに関数を設定

          if(slideTimer == null) {
              // slideTimerの値がnullだった場合

          slideTimer = setInterval(timer, 5000);
          // slideTimerにsetIntervalを代入する
          // 呼び出す関数はtimerを呼び出し5秒ごとに処理を行う
        }
      }

      const resetTimer = function() {
        clearInterval(slideTimer);
        // 動いているsetIntervalを停止させる

        slideTimer = null;
        // slideTimerにnullを代入する

        slideCount();
        // slideCountを呼び出し、再度Intervalをセットする
      }


      next.addEventListener('click', function () {
        // nextボタンを押した時の動作を設定
        timer();
        // timer関数を呼び出す

        resetTimer();
        // resetTimerを呼び出す
      })

      prev.addEventListener('click', function(){
        // prevボタンを押した時の動作
        if (count === 0) {
          // countの値が0だった場合

          countRemove();
          // 一枚目の写真に付いているactiveクラスを削除する

          images.item(imagesLength).classList.add('active');
          // 4枚目の写真にactiveクラスを付与する

          count = imagesLength;
          // countに3を代入　3＝imgLength

        }else {
          // countが0以外の場合

          countRemove();
          // 現在のcountの画像に付いているactiveクラスを削除

          count = count - 1;
          // 現在のcountの値から1を引く

          addClass();
          // 現在のcountから1を引いた画像にactiveクラスを付与
          //（ 一つ前の画像にactiveクラスを付与）
        }
        resetTimer();
      })
      
      slideCount();
      // slideCountを呼び出し、タイマーを動作　　画面読み込み時に動作させるために呼び出す
    }

slideImg();
// slideImg関数を呼び出す