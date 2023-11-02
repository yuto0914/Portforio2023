// ---------------------------------------------------------------------------------------------------------------
// scroll_effect
// ---------------------------------------------------------------------------------------------------------------
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});


// Scrollでナビゲーションの表示/非表示
$(window).on("scroll", function() {
	const scrollHeight = $(document).height();
	const scrollPosition = $(window).height() + $(window).scrollTop();
	const scrollRate = Math.floor(scrollPosition / scrollHeight * 100);
	console.log("Rate:", scrollRate);
	if(95 < scrollRate){
		// $("header").hide();// 非表示
    $("header").css("opacity", 0.0);
	}else{
		// $("header").show();// 表示
    $("header").css("opacity", 1.0);
	}
});
