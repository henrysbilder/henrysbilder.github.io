<!-- Begin 





var color		          = "819AC0"	        // BAKGRUNDSFÄRG (edit in CSS)
var flashwidth		      = "600"		        // BREDD PÅ FLASHEN (I PIXLAR)
var flashheight		      = "50"		        // HÖJD PÅ FLASHEN (I PIXLAR)
var logotype 		      = "flash"	            // LOGOTYP ALT. - | flash | graphic |
var flashmode		      = "transparent"	    // FLASH WMODE | window | opaque | transparent |

var spaceunder		      = "10"			    // UTRYMME UNDER LOGO
var phonenum		      = "info@fredman.se"   // TELEFONNR
var headlink		      = "contact.htm"		// KONTAKTLÄNK TILL
var linktext		      = "KONT@KTA MIG"		// LÄNKAD TEXT











document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td align="left" valign="middle">');

   if (logotype == "flash") {
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+flashwidth+'" height="'+flashheight+'" id="logo">');
document.write('<param name="movie" value="logo.swf">');
document.write('<param name="quality" value="high">');
document.write('<param name="wmode" value="'+flashmode+'">');
document.write('<param name="bgcolor" value="#'+color+'">');
document.write('<embed src="logo.swf" quality="high" wmode="'+flashmode+'" bgcolor="#'+color+'"  width="'+flashwidth+'" height="'+flashheight+'" name="logo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object><br>');
}
   if (logotype == "graphic") {
document.write('<img src="picts/logo.jpg" border="0"><br>');
}

document.write('</td><td valign="middle" align="center" width="200" class="headertext">');

document.write('<span class="headerphone">');

document.write(''+phonenum+'<br>');

document.write('</span>');

document.write('<a href="'+headlink+'">'+linktext+'</a><br>');

document.write('<img src="picts/spacer.gif" border="0" width="200" height="1"><br>');

document.write('</td></tr></table>');

document.write('<img src="picts/spacer.gif" border="0" width="10" height="'+spaceunder+'"><br>');

//  Slut -->