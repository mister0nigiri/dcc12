/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuLinks = document.querySelectorAll('#menu-panel a');
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

// リンクをクリックしたらメニューパネルを閉じる
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
    menuItems.forEach((menuItem) => {
      menuItem.animate({opacity: [1, 0]}, menuOptions);
    });
  });
});



const box = document.getElementById('news');

box.addEventListener('click', function() {
    if (this.style.height === '60%') {
        this.style.height = '68px';
    } else {
        this.style.height = '60%';
    }
    this.querySelector('.news__list').classList.toggle('rotate-135');
});
