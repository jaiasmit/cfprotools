(function ( $ ) {
  $.fn.cfCheckButton = function ( options ) {
    var settings = $.extend( {}, $.fn.cfCheckButton.defaults, options );
    var checker = '<input type="checkbox" class='+settings.checkClass+' value="1">&nbsp;';
    
    return this.each(function () {
	    $('.'+settings.subTextClass,this).prepend(checker);
    
	    if (settings.termsText && settings.termsUrl) {
		    var regex = new RegExp("\\{\\{"+settings.termsKey+"\\}\\}","g");
		    $(":contains('{{"+settings.termsKey+"}}')",this).each(function() {
				var replace_text = '<a href="'+settings.termsUrl+'" target="'+settings.termsTarget+'">'+settings.termsText+'</a>';			var replaced = $(this).html().replace(regex, replace_text);
				$(this).html(replaced);
			});
		}
  	
	  	$(settings.checkClass).click(function (ev) {
		  	ev.stopPropagation();
	  	});
	    
	    $(this).click(function (ev) {
	      if ($(settings.checkClass+':checked',this).length === 0) {
		  		$(settings.loaderClass).hide();
		  		$('.'+settings.subTextClass,this).effect(settings.effect);
		  		ev.stopPropagation();
		  		return false;
	  		}
	    });
	});
  }
  
  $.fn.cfCheckButton.defaults = {
    effect: "shake",
    checkClass: "submitButtonCheck",
    loaderClass: "otoLoading",
    termsKey: "terms-link",
    termsText: null,
    termsUrl: null,
    termsTarget: "_blank",
    subTextClass: "elButtonSub"
  };
}(jQuery));
