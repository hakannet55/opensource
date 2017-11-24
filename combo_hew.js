$('#mainBanner .bxslider').css({'height':'20vw'});
$('#mainBanner .bx-viewport li img').css({'height':'20vw','width':'90%','margin-left':'10%','margin-right':'10%'});
$('#footer-top').css({'padding':'15px'});
$('.top-half').html("<a onmouseover=\"this.style.color ='white';this.style.background ='#D3D3D3';\" onmouseleave=\"this.style.color ='black';this.style.background ='white';\" style=\"color:black;background:white;padding:5px;font-size:1em;text-align:center;width:100%;\" href=\"http://hakannet55.web44.net/otomasyon/login.php\">➤Otomasyon girişi</a>");
$('#footer-top').html("<div style='background:white;border:1px solid grey;color:black;' onmouseover='this.background:red;' class='btn'><a href='http://hakannet55.web44.net/intro.html'>Mobil Uygulama</a></div>");

function md_ur(url){
var st="z-index:13;display:block;padding-top:10px;position:fixed;left:0;top:0;width:99vw;height:99vh;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.7);margin:auto;";
$('body').append("<div id='asdegeg' style='"+st+"'><center><div style='float:left;width:auto;display:inline-block;padding:5px;color:red;cursor:pointer;margin:5px;font-size:1em;background:white;' onclick=\"javascript:$('#asdegeg').remove();$('#asdegeg').remove();\" >X</div><img style='display:block;width:auto;height:80vh;position:relative;top:10px;' src='"+url+"'></center></div>");
}
//md_ur("https://resmim.net/f/k8H6ok.jpg");
function url_yonlendirme(){
var w=window.location.href.split('-o-');
	if(w[1]){
		window.location.href="http://hakannet55.web44.net/otomasyon/public/sum.php?"+w[1];
	}
}
url_yonlendirme();


	//$.fancybox.open('<div style="text-align:center;"><img src="uploads/images/un-popup.png" width="600" height="auto" alt="" /></div>', {autoSize:true, fitToView:false,autoCenter:false,'scrolling': 'no','autoScale': true,});
	//<iframe width="560" height="315" src="https://www.youtube.com/embed/dzaIxiaDNxk" frameborder="0" allowfullscreen></iframe>
	//<img src="uploads/images/pop.jpg"

//$('body').append("<div class='fancybox-wrap fancybox-default fancybox-opened' style='width:90vw; height:width:90vh; display: block; position: fixed; top:20px;left:10px;right:10px;'><div class='fancybox-outer' style='padding: 0px; width:99vw; height:99vh;'><div style=\"background-image:url('https://i.hizliresim.com/nJy0a5.jpg');\"  ></div><div onclick=\"javascript:$('.fancybox-wrap').remove();\" class='fancybox-item fancybox-close'></div></div>");