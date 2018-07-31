
$(document).ready(function(){
	var player=$('video')[0];
	//재생/일시정지
	$('#btn-play-pause').click(function(){
		if(player.paused){//일시정지 상태이면
			player.play();//재생처리
			$(this).find('i').text('pause');
		}else{//재생이면
			player.pause();//일시정지처리
			$(this).find('i').text('play_arrow');
		}
	})

	//다시시작
	$('#btn-replay').click(function(){
		player.currentTime=0;//재생되는 시간을 0으로 초기화
		player.play();
	})

	//음소거
	$('#btn-volume').click(function(){
		if(player.muted){//음소거 상태
			player.muted=false;
			$(this).find('i').text('volume_up');
		}else{//음소거 상태 아님
			player.muted=true;
			$(this).find('i').text('volume_off');
		}
	})

	//전체화면
	$('#btn-fullscreen').click(function(){
		if($(this).find('i').text()=='fullscreen'){//전체화면
			$('#video_o').css('width','100%');
			$('body').addClass('fullscreen');
			$(this).find('i').text('fullscreen_exit');
		}else{
			$('#video_o').css('width','686px');
			$('body').removeClass('fullscreen');
			$(this).find('i').text('fullscreen');
		}
	})

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});


});
