app.service('carousel', function(){
	'use strict';
	this.slider = null;
	this.item = null;
	this.current = null;
	var self = this;
	

	this.init = function() {
		this.slider = $('.slider-inner');
		this.item = this.slider.find('.item');
		this.current = this.slider.find('.current');
	};

	this.next = function () {
		self.init();
		var currentIndex = self.current.data('index');
		var nextIndex = currentIndex + 1;
		if (nextIndex > self.item.length) {
			nextIndex = 1;
		}
		self.item.removeClass('current');
		self.slider.find('li[data-index=' + nextIndex + ']').addClass('current');
	};

	this.prev = function () {
		self.init();
		var currentIndex = self.current.data('index');
		var nextIndex = currentIndex - 1;
		if (nextIndex <= 0) {
			nextIndex = self.item.length;
		}
		self.item.removeClass('current');
		self.slider.find('li[data-index=' + nextIndex + ']').addClass('current');
	};
	
});