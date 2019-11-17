function line(ctx,x,y,x2,y2) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.bezierCurveTo( x2,y, x,y2, x2,y2 );
	//ctx.lineTo(x2, y2);
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
}
/*
 *
function line(ctx,x,y,x2,y2) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
}
 *
 *
 * */
