var version = '0.0.1';
function init() {
	background_canvas = document.getElementById('background_canvas');
	background_ctx = main_canvas.getContext('2d');
	
	main_canvas = document.getElementById('main_canvas');
	main_ctx = main_canvas.getContext('2d');
	
	main_ctx.fillStyle = "red";
	main_ctx.fillRect(10,10,50,50);
	main_ctx.fillStyle = "blue";
	main_ctx.fillRect(120,110,30,60);
}
 function mouse(e) {
	 var x = e.pageX - document.getElementById('game_object').offsetLeft;
	 var y = e.pageY - document.getElementById('game_object').offsetTop;
	 
	 document.getElementById('x').innerHTML = x;
	 document.getElementById('y').innerHTML = y;
 }
 
 var r_y = 0;
 var r_x = 0;
 
 function loop() {
	 main_ctx.fillStyle = "red";
	main_ctx.fillRect(r_y,r_x,50,50);
	main_ctx.fillStyle = "blue";
	main_ctx.fillRect(120,110,30,60);
	r_y++;
	r_x++;
	 if (is_playing)
		 window.setTimeout(loop, 10);
 }
 function start_loop() {
	 is_playing = true;
	 loop();
 }
 function stop_loop() {
	 is_playing = false;
	 
 }
 
 function clear_main_canvas() {
	 main_ctx.clearRect(0,0,800,600);
 }