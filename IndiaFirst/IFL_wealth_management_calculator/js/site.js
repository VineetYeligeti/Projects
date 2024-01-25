$(document).ready(function() {
	new WOW().init();
	$('a.play-btn').click(function(){
		var videoSrc =  $(this).attr('video-scr');
		$('video.slider-video-desk').find('source').attr('src','').attr('src',videoSrc);
		$('div.video').show();
		$('div.video video').load();
		return false;
	});
	$('a.btn-close').click(function(){
		$('div.video video')[0].pause();
		$('div.video').hide();
		return false;
	});
});