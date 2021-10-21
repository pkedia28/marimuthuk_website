var fixmeTop = $('.navbar-collapse').offset().top;       // get initial position of the element
if(screen.width>769){
$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position
    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.navbar-collapse').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            width:'22vw'
        });
    } else {                                   // apply position: static
        $('.navbar-collapse').css({                      // if you scroll above it
            position: 'static'
        });
    }
});
}
else{
	$('.navContainer').css({
		position:'static'
	});
}
