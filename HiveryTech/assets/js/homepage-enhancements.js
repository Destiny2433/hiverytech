(function($) {
	// Scroll-triggered fade-in for elements with class fade-in-on-scroll
	function checkFadeInOnScroll() {
		$('.fade-in-on-scroll').each(function() {
			var $this = $(this);
			var windowBottom = $(window).scrollTop() + $(window).height();
			var elementTop = $this.offset().top;

			if (elementTop < windowBottom - 100) {
				$this.addClass('visible');
			}
		});
	}

	$(window).on('scroll', checkFadeInOnScroll);
	$(window).on('load', checkFadeInOnScroll);
})(jQuery);
