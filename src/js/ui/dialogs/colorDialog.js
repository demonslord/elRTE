
$.fn.elrtedialog = function(o) {
	o = $.extend({}, $.fn.elrtedialog.defaults, o);
	
	return this.each(function() {
		$(this).dialog(o)
	})
}

$.fn.elrtedialog.defaults = {
	dialogClass  : 'elrte-dialog',
	modal     : true, 
	resizable : false,
	width     : 400, 
	// autoOpen  : false, 
	position  : ['center', 100], 
	buttons   : {}
}

$.fn.elrtecolordialog = function(rte, o) {
	
	
	return this.each(function() {
		var colors = [
			"ffffff", "ffffcc", "ffff99", "ffff66", "ffff33", "ffff00", 
			"ffccff", "ffcccc", "ffcc99", "ffcc66", "ffcc33", "ffcc00", 
			"ff99ff", "ff99cc", "ff9999", "ff9966", "ff9933", "ff9900", 
			"ff66ff", "ff66cc", "ff6699", "ff6666", "ff6633", "ff6600", 
			"ff33ff", "ff33cc", "ff3399", "ff3366", "ff3333", "ff3300", 
			"ff00ff", "ff00cc", "ff0099", "ff0066", "ff0033", "ff0000", 
			"ccffff", "ccffcc", "ccff99", "ccff66", "ccff33", "ccff00", 
			"ccccff", "cccccc", "cccc99", "cccc66", "cccc33", "cccc00", 
			"cc99ff", "cc99cc", "cc9999", "cc9966", "cc9933", "cc9900", 
			"cc66ff", "cc66cc", "cc6699", "cc6666", "cc6633", "cc6600", 
			"cc33ff", "cc33cc", "cc3399", "cc3366", "cc3333", "cc3300", 
			"cc00ff", "cc00cc", "cc0099", "cc0066", "cc0033", "cc0000", 
			"99ffff", "99ffcc", "99ff99", "99ff66", "99ff33", "99ff00", 
			"99ccff", "99cccc", "99cc99", "99cc66", "99cc33", "99cc00", 
			"9999ff", "9999cc", "999999", "999966", "999933", "999900", 
			"9966ff", "9966cc", "996699", "996666", "996633", "996600", 
			"9933ff", "9933cc", "993399", "993366", "993333", "993300", 
			"9900ff", "9900cc", "990099", "990066", "990033", "990000", 
			"66ffff", "66ffcc", "66ff99", "66ff66", "66ff33", "66ff00", 
			"66ccff", "66cccc", "66cc99", "66cc66", "66cc33", "66cc00", 
			"6699ff", "6699cc", "669999", "669966", "669933", "669900", 
			"6666ff", "6666cc", "666699", "666666", "666633", "666600", 
			"6633ff", "6633cc", "663399", "663366", "663333", "663300", 
			"6600ff", "6600cc", "660099", "660066", "660033", "660000", 
			"33ffff", "33ffcc", "33ff99", "33ff66", "33ff33", "33ff00", 
			"33ccff", "33cccc", "33cc99", "33cc66", "33cc33", "33cc00", 
			"3399ff", "3399cc", "339999", "339966", "339933", "339900", 
			"3366ff", "3366cc", "336699", "336666", "336633", "336600", 
			"3333ff", "3333cc", "333399", "333366", "333333", "333300", 
			"3300ff", "3300cc", "330099", "330066", "330033", "330000", 
			"00ffff", "00ffcc", "00ff99", "00ff66", "00ff33", "00ff00", 
			"00ccff", "00cccc", "00cc99", "00cc66", "00cc33", "00cc00", 
			"0099ff", "0099cc", "009999", "009966", "009933", "009900", 
			"0066ff", "0066cc", "006699", "006666", "006633", "006600", 
			"0033ff", "0033cc", "003399", "003366", "003333", "003300", 
			"0000ff", "0000cc", "000099", "000066", "000033", "000000"
			],
			$this = $(this).addClass('elrte-dialog-color');
		rte.log(o.color)
		$this.elrtedialog(o)
	})
}