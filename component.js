AFRAME.registerComponent('whatsyername', {
	init: function(){
		const image = this.el.querySelector('a-image');
		image.setAttribute('visible','false');

		this.el.addEventListener('mouseenter', function(){
			image.setAttribute('visible','true');
		});
		this.el.addEventListener('mouseleave', function(){
			image.setAttribute('visible','false');
		});
	}
});
