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

// $(document).ready(function() {
// 	if(screen.width>769){
// $('.sidebar-nav').addClass('fixme');
// }
// });
// var fixmeTop = $('.fixme').offset().top;       // get initial position of the element
// $(window).scroll(function() {                  // assign scroll event listener

//     var currentScroll = $(window).scrollTop(); // get current position
//    if ($(window).width() > 969) {
//     if (currentScroll >= fixmeTop) {           // apply position: fixed if you
//         $('.fixme').css({                      // scroll to that element or below it
//             position: 'fixed',
//             top: '0',
//         });
//     } 
//     else {                                   // apply position: static
//         $('.fixme').css({                      // if you scroll above it
//             position: 'static'
//         });
//     }
// }

// });