
var $j = jQuery.noConflict();
(function(){
	function getPathFromUrl(url) {
	  return url.split("?")[0];
	}



	function init(){
	
		$j('img').each(function() {
			that = $j(this);
		    if( that.height() > 100 ) { // prevent small pics

	    	var img = $j('<img/>');
	    	img.attr('class', "box-it");
	        img.attr('src', 'http://lp.keyade.com/v4/fr/Hackathon-2015/img/logo-boxit.png');

			var pos = that.position(); // returns an object with the attribute top and left

	        top_pos =   pos.top +( that.height() /2 )-44;
	        left_pos =  pos.left +( that.width() /2 )-159;
	        
	        // temporary fix for css
	        // logo
	        img.css({"position": "absolute", "left": left_pos, "top": top_pos, 'height':'auto','opacity':'0',"min-height": "initial","z-index": "9998"})



        	// grab parents elem
	        prts = that.parents()
			  .map(function() {
			    return this;
			  }).get();


	 		
	        that.closest(prts[0]).addClass('bobox').hover(function(){
				img.animate({ opacity: 1 }, { queue: false, duration: '250' } ); 
	    	},function(){
	            img.animate({ opacity: 0 }, { queue: false, duration: '250' } ); 
		    });


        	pics_w = that.width();
        	pics_h = that.height();
	        

	        that.after(img);

	        
        	var ninja = $j('.bobox').clone().find('img').eq(0).attr('src'); 

        	//console.log("ninja: "+ninja);

        	ninja = getPathFromUrl(ninja);
        	if (ninja.indexOf('https:') > -1) {
	            ninja = ninja.replace('https:', 'http:');
	            
	        }  


	        // POPOP
	        img.on('click', function(event) { 
	        	event.preventDefault();
 
	        	var body = $j("body");
				var top = body.scrollTop() // Get position of the body

				if(top!=0)
				{
				  body.animate({scrollTop:0}, '500'); 
				}


	        	// trigger popop
	        	
	        	// console.log( "Sources : "+ninja +"Largeur : "+pics_w +"Hauteur : "+pics_h  );
	        	console.log( "Sources : "+ninja +"Largeur : "+pics_w +"Hauteur : "+pics_h  );

	        	$j('body').append('<a class="popup-with-zoom-anim" href="#small-dialog"><img src="'+ninja+'"/></a> <!-- dialog itself, mfp-hide class is required to make dialog hidden --> <div id="small-dialog" class="zoom-anim-dialog mfp-hide"> <div> <img src="'+ninja+'" id="preview-picture"/> <h1>Ta photo est cool ! On t\'en fait un souvenir ?</h1> </div> <div class="preview-place"> <img src="http://lp.keyade.com/v4/fr/Hackathon-2015/img/round.png" class="round"/> <div class="product"> <div> <div><img src="'+ninja+'" class="mug"/></div> <img src="http://lp.keyade.com/v4/fr/Hackathon-2015/img/mug.png" id="mug"/> </div> <h2 class="title-bobox">Mug Simple</h2> <p>à partir de <span>9,95€</span></p> <a href="//www.photobox.fr/hacktransfer?url='+ninja+'&name=temp1&studio=/studio/mug-simple" class="actionCtaFlat">Je crée</a> </div> <div class="product"> <div> <div><img src="'+ninja+'" class="canvas"/></div> <img src="http://lp.keyade.com/v4/fr/Hackathon-2015/img/canvas.png" id="canvas"/> </div> <h2 class="title-bobox">Toile Photo 20x30cm</h2> <p>à partir de <span>20,99€</span></p> <a href="//www.photobox.fr/hacktransfer?url='+ninja+'&name=temp1&studio=/studio/toile-photo-classique-20x30" class="actionCtaFlat">Je crée</a> </div> <div class="product"> <div> <div><img src="'+ninja+'" class="case"/></div> <img src="http://lp.keyade.com/v4/fr/Hackathon-2015/img/case.png" id="case"/> </div> <h2 class="title-bobox">Coque iPhone 6</h2> <p>à partir de <span>19,95€</span></p> <a href="//www.photobox.fr/hacktransfer?url='+ninja+'&name=temp1&studio=/studio/22892" class="actionCtaFlat">Je crée</a> </div> <span class="go-to-site"> Aller sur <a href="www.photobox.fr">www.photobox.fr</a></span> </div> </div>'); $j('head').append('<style>/*! HTML5 Boilerplate v5.0 | MIT License | http://h5bp.com/ */html{color:#222;font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@font-face{font-family:hand_regular;src:url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.eot);src:url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.eot?#iefix) format("embedded-opentype"),url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.woff2) format("woff2"),url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.woff) format("woff"),url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.ttf) format("truetype"),url(https://secure.photobox.com/assets/content_graphics/files/fonts/hand-regular/photobox-webfont.svg#photobox_handregular) format("svg");font-weight:400;font-style:normal}.actionCtaFlat{font-family:neuzeit-grotesk-reg,sans-serif!important;font-size:20px;font-weight:400;line-height:40px;text-align:center;text-decoration:none;color:#FFF;background:#a2c14b;display:block;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:200px;margin:15px auto 0}#small-dialog{  border: 2px solid black; box-shadow: 0px 0px 0px 5px rgba(204, 204, 204, 0.35);z-index: 9998;background:#fff;padding-top:20px;text-align:left;max-width:50%;margin:40px auto;position:absolute;border-radius:5px;  top: 0; left: 0; right: 0;}#small-dialog #preview-picture{margin:0 auto;display:block;max-width:350px}#small-dialog h1{font-family:hand_regular;color:#292929;text-align:center;   font-size: 30px; margin: 15px auto;}.preview-place{background:url(http://lp.keyade.com/v4/fr/Hackathon-2015/img/light_grey.png);width:100%;height:500px;position:relative}.round{position:absolute;top:-20px;left:48%}.product{float:left;width:33%;margin-top:40px;text-align:center;position:relative}.product div{height:220px}.product div div img{z-index:10;position:absolute;width:75px;top:100px;left:110px}.product div div img.canvas{top:110px;left:100px;width:130px}.product div div img.case{left:110px;top:95px;width:108px}#canvas,#case,#mug{position:absolute;top:30px;left:40px;z-index:5}.product h2,.product p{margin:0}.product p span{color:#e5005a;font-weight:700;font-size:18px}.alert{color:#9e0b0b;text-align:center;font-size:12px;margin-top:15px;display:inline-block;width:100%}.alert img,.alert p{display:inline-block}.alert img{margin-top:-20px;margin-right:10px}.go-to-site{  clear: both; margin: 60px; display: block; padding: 50px;text-align:right;color:#292929;margin-right:15px;clear:both}.go-to-site a{color:#292929}.my-mfp-zoom-in .zoom-anim-dialog{opacity:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}.my-mfp-zoom-in.mfp-ready .zoom-anim-dialog{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.my-mfp-zoom-in.mfp-removing .zoom-anim-dialog{-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8);opacity:0}.my-mfp-zoom-in.mfp-bg{opacity:0;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out;-o-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.my-mfp-zoom-in.mfp-ready.mfp-bg{opacity:.8}.my-mfp-zoom-in.mfp-removing.mfp-bg{opacity:0}.my-mfp-slide-bottom .zoom-anim-dialog{opacity:0;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-transform:translateY(-20px) perspective(600px) rotateX(10deg);-moz-transform:translateY(-20px) perspective(600px) rotateX(10deg);-ms-transform:translateY(-20px) perspective(600px) rotateX(10deg);-o-transform:translateY(-20px) perspective(600px) rotateX(10deg);transform:translateY(-20px) perspective(600px) rotateX(10deg)}.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog{opacity:1;-webkit-transform:translateY(0) perspective(600px) rotateX(0);-moz-transform:translateY(0) perspective(600px) rotateX(0);-ms-transform:translateY(0) perspective(600px) rotateX(0);-o-transform:translateY(0) perspective(600px) rotateX(0);transform:translateY(0) perspective(600px) rotateX(0)}.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog{opacity:0;-webkit-transform:translateY(-10px) perspective(600px) rotateX(10deg);-moz-transform:translateY(-10px) perspective(600px) rotateX(10deg);-ms-transform:translateY(-10px) perspective(600px) rotateX(10deg);-o-transform:translateY(-10px) perspective(600px) rotateX(10deg);transform:translateY(-10px) perspective(600px) rotateX(10deg)}.my-mfp-slide-bottom.mfp-bg{opacity:0;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out;-o-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.my-mfp-slide-bottom.mfp-ready.mfp-bg{opacity:.8}.my-mfp-slide-bottom.mfp-removing.mfp-bg{opacity:0}.hidden{display:none!important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}@media print{*,:after,:before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}} @media screen and (max-width: 768px) {.product{ width:100%; } .product div div img, .product div div img.canvas { top: 40px; } .product div div img.case{top: 20px;} #mug, #canvas, #case {top: -40px;} }.title-bobox{font-size: 18px;} .box-it{max-width:'+pics_w+';}</style>'); }); }



		})
	}
	init();

		    
	
})();