(function(){
    var gameCarouselDatas = [
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_1.jpg",
        },
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_2.jpg",
        },
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_3.jpg",
        },
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_4.jpg",
        },
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_5.jpg",
        },
        {
          image: "https://game.gtimg.cn/images/lolm/m/f_6.jpg",
        },
      ];

     createCarousel('gameCarousel', gameCarouselDatas);


     var oDetail = $('.showDetail');
      oDetail.onclick = function(){
        showPop('popDetail');
      }
})()