(function($) {

	$('.icon').click(function() {
		$(this).toggleClass('change');
		$('.main-nav').slideToggle(400);
	});

})(jQuery);