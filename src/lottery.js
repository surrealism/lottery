/*
 * good good study day day up
 */
function Lottery() {
	this.num_a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];
	this.num_b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	this.sel_a = 6;
	this.sel_b = 1;
	this.res_a = new Array();
	this.res_b = new Array();
	
	this.random_a = function () {
		var cnt_a = num_a.length;
		var cnt_b = num_b.length;
		for (var i = 0; i < sel_a; i ++) {
			var tmp = Math.random() * cnt_a;
			sel_a.push(num_a[tmp]);
		}
		document.writeln(sel_a);
	}
	
	this.random_b = function () {
		
	}
}