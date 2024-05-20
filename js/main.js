/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    //console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 1000,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });

  // ランダムに表示する画像の配列
  const images = [
    'img/menu-img-1@2x.png',
    'img/menu-img-2@2x.png',
    'img/menu-img-3@2x.png',
  ];

  // ランダムなインデックスを生成
  const randomIndex = Math.floor(Math.random() * images.length);

  // 選ばれた画像を表示
  document.getElementById('random-image').src = images[randomIndex];
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});






window.addEventListener('scroll', function() {
  const stay = document.getElementById('stay');
  const fixedElement = document.querySelector('.fixed-element');

  // コンテナの位置を取得
  const stayRect = stay.getBoundingClientRect();
  const stayTop = stayRect.top + window.pageYOffset;
  const stayBottom = stayTop + stay.offsetHeight;

  // 固定表示する要素の高さを取得
  const fixedElementHeight = fixedElement.offsetHeight;

  // スクロール位置を取得
  const scrollY = window.pageYOffset;

  // 固定表示する要素のトップ位置を調整
  if (scrollY > stayTop && scrollY < (stayBottom - fixedElementHeight)) {
      fixedElement.style.position = 'fixed';
      fixedElement.style.top = '0px'; // 固定位置を指定
      fixedElement.style.width = '100%'; // 幅を固定
  } else if (scrollY >= (stayBottom - fixedElementHeight)) {
      fixedElement.style.position = 'absolute';
      fixedElement.style.top = (stayBottom - stayTop - fixedElementHeight) + 'px'; // stay内の位置
      fixedElement.style.width = '100%'; // 幅を固定
  } else {
      fixedElement.style.position = 'absolute';
      fixedElement.style.top = '0px'; // 初期位置に戻す
      fixedElement.style.width = '100%'; // 幅を固定
  }
});