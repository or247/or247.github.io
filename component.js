AFRAME.registerComponent('planet', {
	init: function(){
		const image = document.getElementById('paul-text');
		image.setAttribute('visible','false');

		this.el.addEventListener('mouseenter', function(){
			image.setAttribute('visible','true');
		});
		this.el.addEventListener('mouseleave', function(){
			image.setAttribute('visible','false');
		});
	}
});